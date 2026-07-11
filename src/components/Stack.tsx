"use client";

import { m, useMotionValue, useTransform, animate, PanInfo } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';

interface CardRotateProps {
  children: ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
  enableClick?: boolean;
  shiftDistance?: number;
  isMobile?: boolean;
}

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
  disableDrag = false,
  enableClick = false,
  shiftDistance = 320,
  isMobile = false
}: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);
  const [isAnimating, setIsAnimating] = useState(false);

  function triggerFlyOut() {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Shift by responsive shiftDistance to show card deck shuffling, then send to back and slide back in
    animate(x, shiftDistance || 320, { duration: 0.2, ease: "easeOut" }).then(() => {
      onSendToBack();
      // Slide back in under the stack
      animate(x, 0, { type: 'spring', stiffness: 150, damping: 22 });
      setIsAnimating(false);
    });
  }

  function handleDragEnd(_: any, info: PanInfo) {
    if (isAnimating) return;

    // Use a smaller sensitivity on mobile to make swipe easier
    const effectiveSensitivity = isMobile ? Math.min(sensitivity, 50) : sensitivity;
    // Check both offset distance and velocity for a smooth "flick" swipe experience on mobile
    const velocityThreshold = 150; // px/s
    const flickedRight = info.offset.x > 20 && info.velocity.x > velocityThreshold;
    const flickedLeft = info.offset.x < -20 && info.velocity.x < -velocityThreshold;
    const flickedUp = !isMobile && info.offset.y < -20 && info.velocity.y < -velocityThreshold;
    const flickedDown = !isMobile && info.offset.y > 20 && info.velocity.y > velocityThreshold;

    const swipedRight = info.offset.x > effectiveSensitivity || flickedRight;
    const swipedLeft = info.offset.x < -effectiveSensitivity || flickedLeft;
    const swipedUp = !isMobile && (info.offset.y < -effectiveSensitivity || flickedUp);
    const swipedDown = !isMobile && (info.offset.y > effectiveSensitivity || flickedDown);

    // Only allow swipe directions that correspond to the allowed drag axes
    const canSwipeX = swipedRight || swipedLeft;
    const canSwipeY = !isMobile && (swipedUp || swipedDown);

    if (canSwipeX || canSwipeY) {
      setIsAnimating(true);
      let targetX = 0;
      let targetY = 0;
      if (swipedRight) targetX = shiftDistance || 320;
      else if (swipedLeft) targetX = -(shiftDistance || 320);
      else if (swipedUp) targetY = -(shiftDistance || 320);
      else if (swipedDown) targetY = shiftDistance || 320;

      Promise.all([
        animate(x, targetX, { duration: 0.2, ease: "easeOut" }),
        animate(y, targetY, { duration: 0.2, ease: "easeOut" })
      ]).then(() => {
        onSendToBack();
        // Animate return to center underneath the stack
        animate(x, 0, { type: 'spring', stiffness: 150, damping: 22 });
        animate(y, 0, { type: 'spring', stiffness: 150, damping: 22 });
        setIsAnimating(false);
      });
    } else {
      // Snap back if threshold not met
      animate(x, 0, { type: 'spring', stiffness: 200, damping: 20 });
      animate(y, 0, { type: 'spring', stiffness: 200, damping: 20 });
    }
  }

  return (
    <m.div
      className={disableDrag ? "absolute inset-0 cursor-pointer" : "absolute inset-0 cursor-grab active:cursor-grabbing"}
      style={{ 
        x, 
        y, 
        rotateX, 
        rotateY, 
        width: '100%', 
        height: '100%',
        touchAction: disableDrag ? "auto" : (isMobile ? "pan-y" : "none")
      }}
      // On mobile, restrict drag strictly to X axis so vertical scrolls are never hijacked
      drag={disableDrag ? false : (isMobile ? "x" : true)}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
      onClick={() => {
        if (enableClick && !isAnimating) {
          triggerFlyOut();
        }
      }}
    >
      {children}
    </m.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cards?: ReactNode[];
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
  onCardChange?: (id: number) => void;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 140, damping: 24 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
  onCardChange
}: StackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  interface CardState {
    id: number;
    content: ReactNode;
  }

  const [stack, setStack] = useState<CardState[]>(() => {
    if (cards.length) {
      return cards
        .map((content, index) => ({ id: index + 1, content }))
        .reverse();
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (cards.length) {
      setStack(
        cards
          .map((content, index) => ({ id: index + 1, content }))
          .reverse()
      );
    }
  }, [cards]);

  useEffect(() => {
    if (stack.length > 0 && onCardChange) {
      onCardChange(stack[stack.length - 1].id);
    }
  }, [stack, onCardChange]);

  const sendToBack = (id: number) => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      if (index === -1) return prev;
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  const shiftDistance = isMobile ? 180 : 320;

  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: 600,
        width: '100%',
        height: '100%'
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? ((card.id * 17) % 5) - 2 : 0;
        const isTopCard = index === stack.length - 1;
        return (
          <CardRotate
            key={`${card.id}-${isMobile}`}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag || !isTopCard}
            enableClick={shouldEnableClick && isTopCard}
            shiftDistance={shiftDistance}
            isMobile={isMobile}
          >
            <m.div
              className="rounded-2xl overflow-hidden w-full h-full bg-white border border-scarlet-fire-200 shadow-xl"
              style={{
                transformOrigin: 'center',
                width: '100%',
                height: '100%'
              }}
              animate={{
                rotateZ: (stack.length - index - 1) * 1.5 + randomRotate,
                scale: 1
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
            >
              {card.content}
            </m.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

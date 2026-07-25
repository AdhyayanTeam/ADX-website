"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Geometry, Program, Mesh } from "ogl";
import gsap from "gsap";

export default function InteractiveShader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Create OGL Renderer
    const renderer = new Renderer({
      canvas: canvas,
      antialias: true,
      alpha: false,
      depth: false,
      powerPreference: "high-performance",
    });
    const gl = renderer.gl;

    // High performance fullscreen triangle geometry
    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });

    // Vertex & Fragment Shaders
    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uResolution;
      uniform float uVelocity;
      varying vec2 vUv;

      // 2D Simplex Noise generator
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx) ;
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0 ;
        vec3 h = abs(x) - 0.5 ;
        vec3 a0 = x - floor(x + 0.5);
        vec3 myInbox = 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m * g, myInbox);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        
        // Normalised Device Coordinates (NDC)
        vec2 mouseNDC = uMouse;
        vec2 pixelNDC = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
        
        // Correct aspect ratio so ripples are perfectly circular
        float aspect = uResolution.x / uResolution.y;
        pixelNDC.x *= aspect;
        mouseNDC.x *= aspect;
        
        float dist = distance(pixelNDC, mouseNDC);
        
        // Ripple influence decreases as cursor moves away
        float influence = smoothstep(0.7, 0.0, dist);
        
        // Ripple noise calculation driven by mouse velocity
        float strength = 0.12 * uVelocity;
        vec2 distortedUv = st + vec2(snoise(st * 3.5 + uTime * 0.15)) * strength * influence;
        
        // Ambient background noise
        float n = snoise(distortedUv * 2.5 - uTime * 0.04);
        
        // Color setup aligning with ADX website theme
        vec3 bgColor = vec3(0.015, 0.015, 0.018); // Solid premium off-black
        vec3 waveColor = vec3(0.03, 0.04, 0.08); // Subtle deep blue/indigo gradient
        vec3 accentColor = vec3(0.24, 0.05, 0.09); // Muted pink/rose (drawn from #ff5d73)
        
        // Build base background gradient
        vec3 color = mix(bgColor, waveColor, n * 0.5 + 0.5);
        
        // Draw the interactive light glow around the cursor position
        color = mix(color, accentColor, influence * 0.45 * (n * 0.35 + 0.65));
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Create OGL Program
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: [0, 0] },
        uResolution: { value: [gl.canvas.width, gl.canvas.height] },
        uVelocity: { value: 0 },
      },
    });

    // Create Mesh
    const mesh = new Mesh(gl, { geometry, program });

    // Handle Resize
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Mouse Tracking Logic
    let lastX = 0;
    let lastY = 0;
    
    // Smooth Mouse position vector
    const mousePos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Calculate speed/velocity of mouse movement
      const dx = targetX - lastX;
      const dy = targetY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      lastX = targetX;
      lastY = targetY;

      // GSAP Tween for smooth lag inertia on cursor position
      gsap.to(mousePos, {
        x: targetX,
        y: targetY,
        duration: 0.9,
        ease: "power2.out",
        onUpdate: () => {
          program.uniforms.uMouse.value = [mousePos.x, mousePos.y];
        }
      });

      // Spike velocity and decay back to zero using GSAP
      gsap.to(program.uniforms.uVelocity, {
        value: Math.min(dist * 12, 3.0),
        duration: 0.15,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(program.uniforms.uVelocity, {
            value: 0,
            duration: 0.7,
            ease: "power2.inOut",
          });
        },
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Render loop
    let animationFrameId: number;
    const render = (time: number) => {
      program.uniforms.uTime.value = time * 0.001;
      renderer.render({ scene: mesh });
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-[#030303]">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

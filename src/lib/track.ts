type EventName =
  | "page_view"
  | "section_view"
  | "cta_click"
  | "form_start"
  | "form_complete"
  | "exit";

interface EventPayload {
  event: EventName;
  page: string;
  metadata?: Record<string, string | number | boolean>;
}

export function track(event: EventName, page?: string, metadata?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;

  const payload: EventPayload = {
    event,
    page: page || window.location.pathname,
    metadata,
  };

  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

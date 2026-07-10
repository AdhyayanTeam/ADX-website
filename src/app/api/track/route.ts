import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, page, metadata } = body;

    if (!event || !page) {
      return NextResponse.json({ error: "event and page are required" }, { status: 400 });
    }

    console.log("Analytics event tracked (No Database):", {
      event,
      page,
      metadata,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

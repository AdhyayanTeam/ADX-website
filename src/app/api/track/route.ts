import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, page, metadata } = body;

    if (!event || !page) {
      return NextResponse.json({ error: "event and page are required" }, { status: 400 });
    }

    const db = getDb();
    const stmt = db.prepare(
      "INSERT INTO analytics_events (event, page, metadata) VALUES (?, ?, ?)",
    );
    stmt.run(event, page, metadata ? JSON.stringify(metadata) : null);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { companyName, industry, volume, bottleneck, whatsapp, email } = body;

    if (!companyName || !whatsapp || !email) {
      return NextResponse.json(
        { error: "companyName, whatsapp, and email are required" },
        { status: 400 },
      );
    }

    // Generate a random mock lead ID (replaces auto-incrementing SQLite ID)
    const leadId = Math.floor(Math.random() * 900000) + 100000;

    console.log("Lead created (No Database):", {
      id: leadId,
      companyName,
      industry: industry || "other",
      volume: volume || "unknown",
      bottleneck: bottleneck || "",
      whatsapp,
      email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      id: leadId,
      status: "queued",
      message: "Lead created successfully",
    });
  } catch (err) {
    console.error("Failed to create lead:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

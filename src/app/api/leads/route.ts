import { NextResponse } from "next/server";
import { insertLead } from "@/lib/db";

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

    const leadId = insertLead({
      companyName,
      industry: industry || "other",
      volume: volume || "unknown",
      bottleneck: bottleneck || "",
      whatsapp,
      email,
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

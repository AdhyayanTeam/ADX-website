import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const IMAGE_MAPPINGS: Record<string, string> = {
  "coaching_dashboard.png": "coaching_dashboard_1783661865593.png",
  "clinic_calendar.png": "clinic_calendar_1783661982605.png",
  "salon_scheduler.png": "salon_scheduler_1783661996052.png",
  "gym_checkin.png": "gym_checkin_1783662010233.png",
  "agency_milestones.png": "agency_milestones_1783662027775.png",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get("file");

  if (!file) {
    return NextResponse.json({ error: "Missing file parameter" }, { status: 400 });
  }

  const requestedName = path.basename(file);
  const targetName = IMAGE_MAPPINGS[requestedName] || requestedName;

  const filePath = path.join(
    "/home/chakresh/.gemini/antigravity/brain/a81387fe-a4d4-4086-9f22-c79be6fa64f3",
    targetName
  );

  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

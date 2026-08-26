import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedProjectTypes = new Set(["AI / ML", "Full-Stack Development", "Website Development", "Database Development", "Automation", "Other"]);

type ContactPayload = { name?: unknown; email?: unknown; company?: unknown; projectType?: unknown; budget?: unknown; message?: unknown };

function text(value: unknown) { return typeof value === "string" ? value.trim() : ""; }

export async function POST(request: Request) {
  let body: ContactPayload;
  try { body = (await request.json()) as ContactPayload; } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }
  const payload = { name: text(body.name), email: text(body.email), company: text(body.company), projectType: text(body.projectType), budget: text(body.budget), message: text(body.message) };
  if (payload.name.length < 2 || !emailPattern.test(payload.email) || !allowedProjectTypes.has(payload.projectType) || payload.message.length < 20) return NextResponse.json({ message: "Please complete the required fields with a valid email and a message of at least 20 characters." }, { status: 400 });
  if (payload.name.length > 100 || payload.email.length > 254 || payload.company.length > 150 || payload.message.length > 5000) return NextResponse.json({ message: "One or more fields are too long." }, { status: 400 });
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return NextResponse.json({ message: "Contact delivery is not configured yet. Please use the direct email address instead." }, { status: 503 });
  try {
    const upstream = await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, source: "portfolio", submittedAt: new Date().toISOString() }), cache: "no-store" });
    if (!upstream.ok) throw new Error("Webhook delivery failed");
  } catch { return NextResponse.json({ message: "Unable to send your message right now. Please try again or use direct email." }, { status: 502 }); }
  return NextResponse.json({ message: "Thanks—your inquiry has been sent. I’ll be in touch soon." });
}

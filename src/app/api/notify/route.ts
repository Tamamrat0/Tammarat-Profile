import { NextRequest, NextResponse, userAgent } from "next/server";

// export const runtime = "edge";

// 🧠 Memory rate limit (Edge reset ได้ แต่ช่วยลด spam ได้ระดับหนึ่ง)
const tempCache = new Map<string, number>();
const RATE_LIMIT = 5 * 60 * 1000; // 5 นาที

export async function POST(req: NextRequest) {
  try {
    // 🔎 Get real IP
    const forwarded = req.headers.get("x-forwarded-for");
    const ip =
      req.headers.get("x-real-ip") ||
      forwarded?.split(",")[0]?.trim() ||
      "unknown";

    // 🚫 Rate limit
    const lastVisit = tempCache.get(ip);
    if (lastVisit && Date.now() - lastVisit < RATE_LIMIT) {
      return NextResponse.json({ ok: true, message: "rate limited" });
    }

    tempCache.set(ip, Date.now());

    // 🌍 Location
    const cityRaw = req.headers.get("x-vercel-ip-city");
    // const city = req.headers.get("x-vercel-ip-city") || "Unknown";
    const city = cityRaw ? decodeURIComponent(cityRaw) : "Unknown";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown";

    // 🧠 Referrer
    const referrer = req.headers.get("referer") || "Direct";

    // 🖥 Device / Browser
    const { device, browser, os } = userAgent(req);

    let deviceType = "💻 Desktop";
    if (device.type === "mobile") deviceType = "📱 Mobile";
    if (device.type === "tablet") deviceType = "📱 Tablet";

    // 🧠 User Agent
    // const userAgentRaw = req.headers.get("user-agent") || "Unknown";

    // 🔐 ENV
    const accessToken = process.env.LINE_ACCESS_TOKEN;
    const userId = process.env.LINE_USER_ID;

    if (!accessToken || !userId) {
      console.error("Missing LINE ENV");
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const message = `🎯 New Visitor

🌐 Browser: ${browser.name ?? "Unknown"} (${os.name ?? "Unknown"})
🖥 Device: ${deviceType}

📍 Location: ${city}, ${country}
🌎 IP: ${ip}

⏰ Time: ${new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
    })}`;

    // 📩 Send to LINE
    const lineRes = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        to: userId,
        messages: [
          {
            type: "text",
            text: message,
          },
        ],
      }),
    });

    if (!lineRes.ok) {
      console.error("LINE API Error:", await lineRes.text());
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

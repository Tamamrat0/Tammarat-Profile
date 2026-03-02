// import { NextRequest, NextResponse, userAgent } from "next/server";

// export const runtime = "edge";

// // ตัวแปรเก็บ Cache ในระดับ Memory ของ Edge Function (จะ Reset เมื่อ Function Idle)
// const tempCache = new Set();

// export async function POST(req: NextRequest) {
//   try {
//     const ip =
//       req.headers.get("x-real-ip") ||
//       req.headers.get("x-forwarded-for") ||
//       "unknown";

//     // 1. Simple Anti-Spam: ถ้า IP นี้เพิ่งยิงมา (และ Cache ยังไม่ถูกเคลียร์) ให้ข้าม
//     if (tempCache.has(ip)) {
//       return NextResponse.json({ ok: true, message: "Rate limited (memory)" });
//     }

//     // เก็บ IP ไว้ใน Cache ชั่วคราว
//     tempCache.add(ip);
//     // ตั้งเวลาลบ IP ออกจาก Cache (เช่น 5 นาที) เพื่อให้ยิงใหม่ได้ถ้าจำเป็น
//     setTimeout(() => tempCache.delete(ip), 5 * 60 * 1000);

//     const city = req.headers.get("x-vercel-ip-city") || "Unknown City";
//     const country = req.headers.get("x-vercel-ip-country") || "Unknown Country";
//     const { device, browser, os } = userAgent(req);
//     const deviceType = device.type === "mobile" ? "📱 Mobile" : "💻 Desktop";

//     const accessToken = process.env.LINE_ACCESS_TOKEN;
//     const userId = process.env.LINE_USER_ID;

//     await fetch("https://api.line.me/v2/bot/message/push", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify({
//         to: userId,
//         messages: [
//           {
//             type: "text",
//             text: `🎯 New Visitor\n📍 Loc: ${city}, ${country}\n🖥️ Platform: ${deviceType}\n🌐 Browser: ${browser.name}\n⏰ Time: ${new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" })}`,
//           },
//         ],
//       }),
//     });

//     return NextResponse.json({ ok: true });
//   } catch (error) {
//     return NextResponse.json({ ok: false }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse, userAgent } from "next/server";

export const runtime = "edge";

// ตัวแปรเก็บ IP ชั่วคราวใน Memory (กัน Spam เบื้องต้น)
const tempCache = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    // แก้ปัญหา req.ip ด้วยการใช้ Header แทน
    const ip =
      req.headers.get("x-real-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    // Anti-spam เบื้องต้น
    if (ip !== "unknown" && tempCache.has(ip)) {
      return NextResponse.json({ ok: true, message: "Rate limited" });
    }

    if (ip !== "unknown") {
      tempCache.add(ip);
      setTimeout(() => tempCache.delete(ip), 60000); // กันซ้ำใน 1 นาที
    }

    // ดึงข้อมูลอื่นๆ
    const city = req.headers.get("x-vercel-ip-city") || "Unknown City";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown Country";
    const { device, browser, os } = userAgent(req);
    const deviceType = device.type === "mobile" ? "📱 Mobile" : "💻 Desktop";

    const accessToken = process.env.LINE_ACCESS_TOKEN;
    const userId = process.env.LINE_USER_ID;

    if (!accessToken || !userId) {
      console.error("Missing Environment Variables");
      return NextResponse.json({ error: "Config missing" }, { status: 500 });
    }

    await fetch("https://api.line.me/v2/bot/message/push", {
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
            text: `🎯 New Visitor Tracked\n\n📍 Location: ${city}, ${country}\n🖥️ Platform: ${deviceType}\n🌐 Browser: ${browser.name} (${os.name})\n⏰ Time: ${new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" })}`,
          },
        ],
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

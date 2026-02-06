import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  try {
    const id = Number(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const personal = await prisma.personal.findUnique({
      where: {
        id,
      },
    });

    if (!personal) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(personal, { status: 200 });
  } catch (err) {
    NextResponse.json(err, { status: 500 });
  }
}

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

//prevent cachting
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const rooms = await prisma.room.findMany();
  return NextResponse.json(rooms);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newRoom = await prisma.room.create({
    data: {
      name: body.name,
    },
  });

  return NextResponse.json(newRoom, { status: 201 });
}

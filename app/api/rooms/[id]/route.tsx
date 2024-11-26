/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

type Props = {
  params: { id: string };
};

export async function GET(request: NextRequest, { params }: Props) {
  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!room)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(room);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (!params.id)
    return NextResponse.json({ error: "The room not found." }, { status: 404 });

  return NextResponse.json({ id: 3, ...body });
}

export function DELETE(request: NextRequest, { params }: Props) {
  if (!params.id)
    return NextResponse.json({ error: "The room not found." }, { status: 404 });

  return NextResponse.json({});
}

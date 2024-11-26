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
    return NextResponse.json({ error: "Room not found" }, { status: 404 });
  return NextResponse.json(room);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!room)
    return NextResponse.json({ error: "Room not found" }, { status: 404 });

  const updatedRoom = await prisma.room.update({
    where: { id: room.id },
    data: {
      name: body.name,
      bookings: body.bookings,
      created_at: body.created_at,
      description: body.description,
      discount: body.discount,
      image: body.image,
      maxCapacity: body.maxCapacity,
      requlaarPrice: body.requlaarPrice,
    },
  });

  return NextResponse.json(updatedRoom);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!room)
    return NextResponse.json({ error: "The room not found." }, { status: 404 });

  await prisma.room.delete({ where: { id: parseInt(params.id) } });

  return NextResponse.json({});
}

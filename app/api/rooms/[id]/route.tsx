/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

type Props = {
  params: { id: string };
};

export function GET(request: NextRequest, { params }: Props) {
  return NextResponse.json({
    id: 1,
    created_at: "2024-11-25 16:01:22.9547+00",
    name: "room_1",
    maxCapacity: 3,
    regularPrice: 1000,
    discount: 60,
    description: "sea side",
    image: "",
  });
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

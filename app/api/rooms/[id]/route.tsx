/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: { id: string };
};

export function GET(request: NextRequest, { params }: Props) {
  return NextResponse.json(
    //   {
    //   id: 1,
    //   created_at: "2024-11-25 16:01:22.9547+00",
    //   name: "room_1",
    //   maxCapacity: 3,
    //   regularPrice: 1000,
    //   discount: 60,
    //   description: "sea side",
    //   image: "",
    // }
    { name: "Sepid", id: 1 }
  );
}

import { NextRequest, NextResponse } from "next/server";

//prevent cachting
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GET(request: NextRequest) {
  return NextResponse.json([
    // {
    //   id: 1,
    //   created_at: "2024-11-25 16:01:22.9547+00",
    //   name: "room_1",
    //   maxCapacity: 3,
    //   regularPrice: 1000,
    //   discount: 60,
    //   description: "sea side",
    //   image: "",
    // },
    // {
    //   id: 2,
    //   created_at: "2024-11-25 20:01:22.9547+00",
    //   name: "room_2",
    //   maxCapacity: 2,
    //   regularPrice: 700,
    //   discount: 40,
    //   description: "sea side",
    //   image: "",
    // },
    { name: "Sepid", id: 1 },
    { name: "Narge", id: 2 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json(body);
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = [
    {
      id: 1,
      name: 'Sepatu Baru',
      price: 100000
    },
    {
      id: 2,
      name: 'Sepatu Nike',
      price: 400000
    }
  ]

  console.log(request);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detail = data.find(fi => fi.id === Number(id));
    return NextResponse.json({ status: 200, data: detail });
  } else {
    return NextResponse.json({ status: 200, data });
  }
}
import { dataset } from "@/constants/cars";
import { NextResponse } from "next/server";

export async function GET() {
  const carListings = dataset;
  return NextResponse.json({ carListings }, { status: 200 });
}

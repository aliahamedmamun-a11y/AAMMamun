import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Category from "@/models/Category";

// API route সবসময় dynamic হবে
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // MongoDB কানেকশন
    await dbConnect();

    // সব ক্যাটেগরি ফেচ করা
    const categories = await Category.find({});

    // JSON আকারে রিটার্ন করা
    return NextResponse.json(categories);
  } catch (error: any) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

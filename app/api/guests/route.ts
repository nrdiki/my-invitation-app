import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("rsvps")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
  console.error("GET /api/guests error:", message);
  return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, status, message } = body;

    const { data, error } = await supabase
      .from("rsvps")
      .insert([{ name, status, message }]);

    if (error) throw error;

    return NextResponse.json(data);
  } catch (err: unknown) {
  const message = err instanceof Error ? err.message : "Unknown error";
  console.error("POST /api/guests error:", message);
  return NextResponse.json({ error: message }, { status: 500 });
  }
}

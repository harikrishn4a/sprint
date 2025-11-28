import { NextResponse } from "next/server";

type Params = {
  params: { projectId: string };
};

export async function POST(_: Request, { params }: Params) {
  return NextResponse.json({ message: `Regenerating plan for ${params.projectId}` });
}

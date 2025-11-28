import { NextResponse } from "next/server";

type Params = {
  params: { projectId: string };
};

export async function GET(_: Request, { params }: Params) {
  return NextResponse.json({ projectId: params.projectId });
}

export async function PATCH(_: Request, { params }: Params) {
  return NextResponse.json({ message: `Update project ${params.projectId}` });
}

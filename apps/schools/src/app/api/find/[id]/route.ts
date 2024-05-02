import { NextResponse } from 'next/server';

type Params = {
  id: string
}

export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id;
  console.log(id)
  try {
    const data = await (await fetch(`http://educacao.dadosabertosbr.org/api/escola/${id}`)).json();
    return NextResponse.json({data});
  } catch {
    return NextResponse.json({data: []});
  }
}

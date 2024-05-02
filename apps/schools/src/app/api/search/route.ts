import { NextResponse } from 'next/server';

export async function GET(request: Request, resp: NextResponse) {
  const params = request.url.substring(request.url.indexOf('?'));
  try {
    const data = await (await fetch(`http://educacao.dadosabertosbr.org/api/escolas/buscaavancada${params}`)).json();
    return NextResponse.json({data});
  } catch {
    return NextResponse.json({data: []});
  }
}

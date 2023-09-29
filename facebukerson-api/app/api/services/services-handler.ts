/**
 * @author Gabriel Spinola Mendes da Silva | gabrielspinola77@gmail.com
 *
 * @license GPL-3.0
 */

import { ModelsApiCode } from '@/lib/apiConfig'
import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function servicesHandler(req: Request, getData: any) {
  const url = new URL(req.url) // Create a URL object from the request URL
  const queryParams = url.searchParams // Access the query parameters

  const id = queryParams.get('id')
  const modelCode = queryParams.get('modelCode') as ModelsApiCode

  if (!modelCode) {
    return NextResponse.json(
      { message: "ServicesHandler::ModelCode can't be null" },
      { status: 400 },
    )
  }

  try {
    const data = await getData(id, modelCode)

    return NextResponse.json({ data }, { status: 200 })
  } catch (e: unknown) {
    return NextResponse.json({ message: `${e}` }, { status: 400 })
  }
}

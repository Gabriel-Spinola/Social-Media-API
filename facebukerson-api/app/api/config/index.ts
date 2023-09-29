/**
 * @author Gabriel Spinola Mendes da Silva | gabrielspinola77@gmail.com
 *
 * @license GPL-3.0
 */

import { NextResponse } from 'next/server'

export type PrismaData = Record<string, any> | null
export type APIErrorResponse = NextResponse<{ data: { error: string } }>

/**
 * @author Gabriel Spinola Mendes da Silva | gabrielspinola77@gmail.com
 *
 * @license GPL-3.0
 */

import NextAuth from 'next-auth'
import { AuthOptions } from '@/lib/auth'

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }

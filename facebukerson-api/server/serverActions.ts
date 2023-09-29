/**
 * @author Gabriel Spinola Mendes da Silva | gabrielspinola77@gmail.com
 *
 * @license GPL-3.0
 */

'use server'

// LINK: https://www.google.com/u/1/recaptcha/admin/site/670403759

import axios from 'axios'

export async function verifyCaptcha(token: string | null): Promise<string> {
  try {
    const res = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    )

    if (res.data.success) {
      return 'success!'
    } else {
      throw new Error('Failed Captcha')
    }
  } catch (e: unknown) {
    console.error(e)

    return 'Something went wrong with the captcha verification!'
  }
}

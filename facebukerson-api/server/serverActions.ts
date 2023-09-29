/**
 * @author Gabriel Spinola Mendes da Silva | gabrielspinola77@gmail.com
 *
 * @license GPL-3.0
 */

'use server'

import axios from 'axios'
import { API_ENDPOINTS, API_URL } from '@/lib/apiConfig'
import { User } from '@prisma/client'
import { ESResponse, UserSelectedData } from '@/lib/common'

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

/**
 *
 * @param formData
 * @param userId
 * @returns Returns the updated data from the user or an error
 */
export async function updateUserPageData(
  formData: FormData,
  userId: string,
): Promise<ESResponse<User>> {
  try {
    const response = await fetch(
      `${API_URL}${API_ENDPOINTS.handlers.updateUser}?id=${userId}`,
      {
        method: 'PUT',
        body: formData,
      },
    )

    if (!response.ok) {
      throw new Error('Response not okay')
    }

    const { data }: { data: User } = await response.json()

    return { data, error: null }
  } catch (error: unknown) {
    // TODO - Client Response
    console.error(error)

    return { data: null, error: error as string }
  }
}


/**
 * @author Gabriel Spinola
 * @default Cache is currently deactivated
 *
 * @param id Id of the user as a string.
 * @param requestData the specific data from the user you want to request.
 * @returns the requested data from the user or, if failed, null.
 */
export async function getUserData(
  id: string,
  requestData: UserSelectedData,
): Promise<Partial<User> | null> {
  'use server'

  try {
    const response = await fetch(
      `${API_URL}${API_ENDPOINTS.services.users}?id=${id}`,
      {
        method: 'POST',
        headers: {
          'Cotent-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
        cache: 'no-cache', // REVIEW -
        next: { tags: ['user-data'] },
      },
    )

    if (!response.ok) throw new Error('Response not ok')

    const { data }: { data: Partial<User> } = await response.json()
    return data
  } catch (error: unknown) {
    console.error(error, 'Failed to fetch users')

    return null
  }
}

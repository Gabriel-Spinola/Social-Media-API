/**
 * @author Gabriel Spinola Mendes da Silva | gabrielspinola77@gmail.com
 *
 * @license GPL-3.0
 */

import { prisma } from '@/lib/database/prisma'
import { ModelsApiCode } from '@/lib/apiConfig'
import { servicesHandler } from '../services-handler'
import { PrismaData } from '../../config'

async function getData(
  id: string,
  modelCode: ModelsApiCode,
): Promise<PrismaData> {
  switch (modelCode) {
    case ModelsApiCode.Project:
      return await prisma.project.findUnique({ where: { id: id as string } })

    case ModelsApiCode.Post:
      return await prisma.post.findUnique({ where: { id: id as string } })

    case ModelsApiCode.Comment:
      return await prisma.comment.findUnique({ where: { id: toInteger(id) } })

    case ModelsApiCode.User:
      return await prisma.user.findUnique({
        where: { id: id as string },
        select: {
          id: true,
          name: true,
          title: true,
          description: true,
          position: true,
          linkedinUrl: true,
          siteUrl: true,
          contactPhone: true,
          email: true,
          createdAt: true,
          profilePic: true,
          // AU: true,
          // projects: true,
          // comments: true,
          // password: false,
          // updatedAt: false,
          // accounts: false,
          // sessions: false,
        },
      })

    default:
      throw new Error(`Bad Request: Invalid Model Code`)
  }
}

const handler = (req: Request) => servicesHandler(req, getData)

export { handler as GET, handler as POST }

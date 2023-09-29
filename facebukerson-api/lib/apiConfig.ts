/**
 * @author Gabriel Spinola Mendes da Silva | gabrielspinola77@gmail.com
 *
 * @license GPL-3.0
 */

export const API_ENDPOINTS = {
  services: {
    posts: 'api/services/posts/',
    users: 'api/services/users/',
    comments: 'api/services/comments/',
    findUnique: 'api/services/find-unique/',
    findMany: 'api/services/find-many/',
  },
  handlers: {
    createProject: 'api/handlers/CreateProjectFormHandler/',
    updateUser: 'api/handlers/update-user/',
  },
}

// STUB - TEMP
export enum ModelsApiCode {
  Project = '0',
  Post = '1',
  Comment = '2',
  User = '3',
}

export const SUPABASE_STORAGE_URL = `https://${process.env.SUPABASE_PROJECT_ID}.supabase.co/storage/v1/upload/resumable`

export const API_URL = 'http://localhost:3000/'

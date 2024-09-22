import { hash } from 'bcryptjs'

export async function hashUserPassword(password: string) {
  return await hash(password, 6)
}

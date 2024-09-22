import { compare } from 'bcryptjs'

export async function compareUserPassword(word: string, password: string) {
  return await compare(word, password)
}

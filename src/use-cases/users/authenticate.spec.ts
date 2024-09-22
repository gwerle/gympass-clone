import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { AuthenticateUseCase } from './authenticate'
import { UserDoesNotExistsError } from '../errors/user-does-not-exists-error'
import { UserWrongPasswordError } from '../errors/user-wrong-password-error'
import { hashUserPassword } from '@/utils/hash-user-password'

let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe('AuthenticateUseCase', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should be able to authenticate', async () => {
    const password = '123456'
    await usersRepository.create({
      email: 'johndoe@example.com',
      name: 'John Doe',
      password_hash: await hashUserPassword(password),
    })

    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password,
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should throw exception when user does not exists', async () => {
    await expect(() => {
      return sut.execute({
        email: 'johndoe@example.com',
        password: '123456',
      })
    }).rejects.toBeInstanceOf(UserDoesNotExistsError)
  })

  it('should throw exception when user send wrong password', async () => {
    await usersRepository.create({
      email: 'johndoe@example.com',
      name: 'John Doe',
      password_hash: await hashUserPassword('123456'),
    })

    await expect(() => {
      return sut.execute({
        email: 'johndoe@example.com',
        password: 'abcd',
      })
    }).rejects.toBeInstanceOf(UserWrongPasswordError)
  })
})

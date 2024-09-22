import { UsersRepository } from '@/repositories/users-repository'
import { UserDoesNotExistsError } from '../errors/user-does-not-exists-error'
import { UserWrongPasswordError } from '../errors/user-wrong-password-error'
import { User } from '@prisma/client'
import { compareUserPassword } from '@/utils/compare-user-password'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new UserDoesNotExistsError()
    }

    const doesPasswordMatches = await compareUserPassword(
      password,
      user.password_hash,
    )

    if (!doesPasswordMatches) {
      throw new UserWrongPasswordError()
    }

    return {
      user,
    }
  }
}

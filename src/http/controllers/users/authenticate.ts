import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeAuthenticateUseCase } from '@/use-cases/users/factories/make-authenticate-use-case'
import { UserWrongPasswordError } from '@/use-cases/errors/user-wrong-password-error'
import { UserDoesNotExistsError } from '@/use-cases/errors/user-does-not-exists-error'

export async function authenticateController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    const authenticateUseCase = makeAuthenticateUseCase()

    await authenticateUseCase.execute({
      email,
      password,
    })
  } catch (err) {
    if (
      err instanceof UserWrongPasswordError ||
      err instanceof UserDoesNotExistsError
    ) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}

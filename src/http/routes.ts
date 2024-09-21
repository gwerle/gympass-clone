import { FastifyInstance } from 'fastify'
import { registerController } from '@/http/controllers/users/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerController)
}

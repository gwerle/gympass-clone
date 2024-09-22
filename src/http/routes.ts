import { FastifyInstance } from 'fastify'
import { registerController } from '@/http/controllers/users/register'
import { authenticateController } from './controllers/users/authenticate'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerController)

  app.post('/sessions', authenticateController)
}

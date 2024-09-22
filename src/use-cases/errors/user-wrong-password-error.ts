export class UserWrongPasswordError extends Error {
  constructor() {
    super('Wrong password')
  }
}

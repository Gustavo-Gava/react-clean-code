import { randEmail, randPassword } from '@ngneat/falso'
import { type AuthenticationParams } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: randEmail(),
  password: randPassword(),
})

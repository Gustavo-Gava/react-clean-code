import { type AccountModel } from '../models'
import { type AuthenticationParams } from '../usecases/authentication'

import { randEmail, randPassword, randUuid } from '@ngneat/falso'

export const mockAuthentication = (): AuthenticationParams => ({
  email: randEmail(),
  password: randPassword(),
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: randUuid(),
})

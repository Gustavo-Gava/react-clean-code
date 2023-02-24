import { randEmail, randPassword, randUuid } from '@ngneat/falso'
import { type AccountModel } from '../models/account-model'
import { type AuthenticationParams } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: randEmail(),
  password: randPassword(),
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: randUuid(),
})

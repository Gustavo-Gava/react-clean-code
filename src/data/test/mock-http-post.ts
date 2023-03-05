import { randUrl, randUserName, randEmail, randPassword } from '@ngneat/falso'
import { type HttpPostParams } from '../protocols/http'

export const mockPostRequest = (): HttpPostParams<any> => {
  return {
    url: randUrl(),
    body: {
      name: randUserName(),
      email: randEmail(),
      password: randPassword(),
    },
  }
}

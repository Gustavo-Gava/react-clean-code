import { type HttpPostParams } from '../protocols/http'

import { faker } from '@faker-js/faker'

export const mockPostRequest = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: {
      name: faker.name,
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  }
}

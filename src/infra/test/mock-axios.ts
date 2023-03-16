import axios from 'axios'

import { faker } from '@faker-js/faker'

export const mockedAxiosResolvedResponse = {
  status: 200,
  data: faker.datatype.json(),
}

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue({
    status: mockedAxiosResolvedResponse.status,
    data: mockedAxiosResolvedResponse.data,
  })

  return mockedAxios
}

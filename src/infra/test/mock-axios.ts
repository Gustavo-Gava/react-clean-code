import { randJSON } from '@ngneat/falso'
import axios from 'axios'

export const mockedAxiosResolvedResponse = {
  status: 200,
  data: randJSON(),
}

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue({
    status: mockedAxiosResolvedResponse.status,
    data: mockedAxiosResolvedResponse.data,
  })

  return mockedAxios
}

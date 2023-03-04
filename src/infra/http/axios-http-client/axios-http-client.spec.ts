import { type HttpPostParams } from '@/data/protocols/http'
import { randEmail, randPassword, randUrl, randUserName } from '@ngneat/falso'
import axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

interface SutTypes {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = axios as jest.Mocked<typeof axios>

  return {
    sut,
    mockedAxios,
  }
}

const mockPostRequest = (): HttpPostParams<any> => {
  return {
    url: randUrl(),
    body: {
      name: randUserName(),
      email: randEmail(),
      password: randPassword(),
    },
  }
}

// TODO - Join the second test with the first one

describe('AxiosHttpClient', () => {
  test('Should call axios with correct params', async () => {
    const { url, body } = mockPostRequest()
    const { sut, mockedAxios } = makeSut()

    await sut.post({ url, body })
    expect(mockedAxios.post).toHaveBeenCalledWith(url, body)
  })
})

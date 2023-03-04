import { type HttpPostParams } from '@/data/protocols/http'
import {
  randEmail,
  randPassword,
  randUrl,
  randUserName,
  randJSON,
} from '@ngneat/falso'
import axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

interface SutTypes {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const mockedAxiosResolvedResponse = {
  status: 200,
  data: randJSON(),
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue({
    status: mockedAxiosResolvedResponse.status,
    data: mockedAxiosResolvedResponse.data,
  })

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

describe('AxiosHttpClient', () => {
  test('Should call axios with correct params', async () => {
    const { url, body } = mockPostRequest()
    const { sut, mockedAxios } = makeSut()

    await sut.post({ url, body })
    expect(mockedAxios.post).toHaveBeenCalledWith(url, body)
  })

  test('Should return the correct statusCode and body', async () => {
    const { url, body } = mockPostRequest()
    const { sut } = makeSut()

    const httpResponse = await sut.post({ url, body })
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResolvedResponse.status,
      body: mockedAxiosResolvedResponse.data,
    })
  })
})

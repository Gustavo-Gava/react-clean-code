import { mockPostRequest } from '@/data/test/mock-http-post'
import { mockAxios } from '@/infra/test'
import type axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

interface SutTypes {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()

  return {
    sut,
    mockedAxios: mockAxios(),
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
    const { sut, mockedAxios } = makeSut()

    const promise = sut.post({ url, body })
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})

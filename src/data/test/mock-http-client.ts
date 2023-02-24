import type {
  HttpPostParams,
  HttpPostClient,
} from '@/data/protocols/http/http-post-client'
import {
  HttpStatusCode,
  type HttpResponse,
} from '@/data/protocols/http/http-response'

export class HttpPostClientSpy<BodyType, ResponseType>
  implements HttpPostClient<BodyType, ResponseType>
{
  url?: string
  body?: BodyType
  response: HttpResponse<ResponseType> = {
    statusCode: HttpStatusCode.ok,
  }

  async post(
    params: HttpPostParams<BodyType>
  ): Promise<HttpResponse<ResponseType>> {
    this.url = params.url
    this.body = params.body

    return this.response
  }
}

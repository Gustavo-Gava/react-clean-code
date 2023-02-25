import {
  type HttpPostParams,
  type HttpPostClient,
  type HttpResponse,
  HttpStatusCode,
} from '@/data/protocols/http'

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

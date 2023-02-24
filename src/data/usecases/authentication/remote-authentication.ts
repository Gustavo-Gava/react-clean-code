import {
  type Authentication,
  type AuthenticationParams,
} from '@/domain/usecases/authentication'
import type { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { type AccountModel } from '@/domain/models/account-model'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        if (httpResponse.body === null || httpResponse.body === undefined) {
          throw new UnexpectedError()
        }

        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}

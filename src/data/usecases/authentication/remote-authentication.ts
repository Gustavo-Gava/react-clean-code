import { type AuthenticationParams } from '../../../domain/usecases/authentication'
import type { HttpPostClient } from '../../protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params })
  }
}

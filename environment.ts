import { EnvArgs } from '@open-template-hub/common';

export class Environment {
  constructor(private _args: EnvArgs = {} as EnvArgs) {
    this._args = {
      accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
      mongoDbConnectionLimit: process.env.MONGODB_CONNECTION_LIMIT,
      mongoDbUri: process.env.MONGODB_URI,
      responseEncryptionSecret: process.env.RESPONSE_ENCRYPTION_SECRET,
    } as EnvArgs;
  }

  args = () => {
    return this._args;
  };
}
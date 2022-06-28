export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './nFTApi';
import { NFTApi } from './nFTApi';
export * from './obitApi';
import { ObitApi } from './obitApi';
export * from './utilsApi';
import { UtilsApi } from './utilsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountsApi, NFTApi, ObitApi, UtilsApi];

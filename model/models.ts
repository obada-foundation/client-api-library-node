import localVarRequest from 'request';

export * from './account';
export * from './accountBalance';
export * from './accountRequest';
export * from './accounts';
export * from './deviceDocument';
export * from './document';
export * from './exportAccountRequest';
export * from './exportAccountResponse';
export * from './generateObitChecksumRequest';
export * from './generateObitChecksumResponse';
export * from './generateObitDIDRequest';
export * from './generateObitDIDResponse';
export * from './history200Response';
export * from './importAccountRequest';
export * from './internalServerError';
export * from './mnemonicRequest';
export * from './nFT';
export * from './nFTData';
export * from './nFTDocument';
export * from './newMnemonic';
export * from './notAuthorized';
export * from './notFound';
export * from './obit';
export * from './obitHistory';
export * from './obits';
export * from './obitsMeta';
export * from './profile';
export * from './registerRequest';
export * from './saveObitRequest';
export * from './sendCoinsRequest';
export * from './sendNFTRequest';
export * from './unprocessableEntity';
export * from './unprocessableEntityFieldsInner';
export * from './walletExistsError';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Account } from './account';
import { AccountBalance } from './accountBalance';
import { AccountRequest } from './accountRequest';
import { Accounts } from './accounts';
import { DeviceDocument } from './deviceDocument';
import { Document } from './document';
import { ExportAccountRequest } from './exportAccountRequest';
import { ExportAccountResponse } from './exportAccountResponse';
import { GenerateObitChecksumRequest } from './generateObitChecksumRequest';
import { GenerateObitChecksumResponse } from './generateObitChecksumResponse';
import { GenerateObitDIDRequest } from './generateObitDIDRequest';
import { GenerateObitDIDResponse } from './generateObitDIDResponse';
import { History200Response } from './history200Response';
import { ImportAccountRequest } from './importAccountRequest';
import { InternalServerError } from './internalServerError';
import { MnemonicRequest } from './mnemonicRequest';
import { NFT } from './nFT';
import { NFTData } from './nFTData';
import { NFTDocument } from './nFTDocument';
import { NewMnemonic } from './newMnemonic';
import { NotAuthorized } from './notAuthorized';
import { NotFound } from './notFound';
import { Obit } from './obit';
import { ObitHistory } from './obitHistory';
import { Obits } from './obits';
import { ObitsMeta } from './obitsMeta';
import { Profile } from './profile';
import { RegisterRequest } from './registerRequest';
import { SaveObitRequest } from './saveObitRequest';
import { SendCoinsRequest } from './sendCoinsRequest';
import { SendNFTRequest } from './sendNFTRequest';
import { UnprocessableEntity } from './unprocessableEntity';
import { UnprocessableEntityFieldsInner } from './unprocessableEntityFieldsInner';
import { WalletExistsError } from './walletExistsError';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountBalance": AccountBalance,
    "AccountRequest": AccountRequest,
    "Accounts": Accounts,
    "DeviceDocument": DeviceDocument,
    "Document": Document,
    "ExportAccountRequest": ExportAccountRequest,
    "ExportAccountResponse": ExportAccountResponse,
    "GenerateObitChecksumRequest": GenerateObitChecksumRequest,
    "GenerateObitChecksumResponse": GenerateObitChecksumResponse,
    "GenerateObitDIDRequest": GenerateObitDIDRequest,
    "GenerateObitDIDResponse": GenerateObitDIDResponse,
    "History200Response": History200Response,
    "ImportAccountRequest": ImportAccountRequest,
    "InternalServerError": InternalServerError,
    "MnemonicRequest": MnemonicRequest,
    "NFT": NFT,
    "NFTData": NFTData,
    "NFTDocument": NFTDocument,
    "NewMnemonic": NewMnemonic,
    "NotAuthorized": NotAuthorized,
    "NotFound": NotFound,
    "Obit": Obit,
    "ObitHistory": ObitHistory,
    "Obits": Obits,
    "ObitsMeta": ObitsMeta,
    "Profile": Profile,
    "RegisterRequest": RegisterRequest,
    "SaveObitRequest": SaveObitRequest,
    "SendCoinsRequest": SendCoinsRequest,
    "SendNFTRequest": SendNFTRequest,
    "UnprocessableEntity": UnprocessableEntity,
    "UnprocessableEntityFieldsInner": UnprocessableEntityFieldsInner,
    "WalletExistsError": WalletExistsError,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

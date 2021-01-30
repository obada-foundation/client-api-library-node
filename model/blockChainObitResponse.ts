/**
 * OBADA Client Helper API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: techops@obada.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BlockChainObit } from './blockChainObit';

export class BlockChainObitResponse {
    'status'?: number;
    'blockchainObit'?: BlockChainObit;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "blockchainObit",
            "baseName": "blockchain_obit",
            "type": "BlockChainObit"
        }    ];

    static getAttributeTypeMap() {
        return BlockChainObitResponse.attributeTypeMap;
    }
}


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
import { ClientObit } from './clientObit';

export class ClientObitResponse {
    'status'?: number;
    'obit'?: ClientObit;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "obit",
            "baseName": "obit",
            "type": "ClientObit"
        }    ];

    static getAttributeTypeMap() {
        return ClientObitResponse.attributeTypeMap;
    }
}


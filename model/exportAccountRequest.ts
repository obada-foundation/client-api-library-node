/**
 * OBADA API
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

/**
* OBADA account export payload
*/
export class ExportAccountRequest {
    /**
    * OBADA account
    */
    'address'?: string;
    /**
    * Passphrase to decrypt the account
    */
    'passphrase'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "passphrase",
            "baseName": "passphrase",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExportAccountRequest.attributeTypeMap;
    }
}


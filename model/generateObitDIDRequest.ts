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
* Generate Obit DID payload
*/
export class GenerateObitDIDRequest {
    /**
    * Manufacturer (Required)
    */
    'manufacturer': string;
    /**
    * Part Number (Required)
    */
    'partNumber': string;
    /**
    * Serial Number (Required)
    */
    'serialNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "manufacturer",
            "baseName": "manufacturer",
            "type": "string"
        },
        {
            "name": "partNumber",
            "baseName": "part_number",
            "type": "string"
        },
        {
            "name": "serialNumber",
            "baseName": "serial_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GenerateObitDIDRequest.attributeTypeMap;
    }
}


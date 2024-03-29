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
import { DeviceDocument } from './deviceDocument';

/**
* Request to save Obit
*/
export class SaveObitRequest {
    /**
    * Waiting more specific details from Rohi
    */
    'manufacturer': string;
    /**
    * Manufacturer provided. In cases where no part number is provided for the product, use model, or the most specific ID available from the manufacturer. MWCN2LL/A (an iPhone 11 Pro, Silver, 256GB, model A2160)
    */
    'partNumber': string;
    /**
    * Serial number hashed with sha256 hash function
    */
    'serialNumber': string;
    'documents'?: Array<DeviceDocument>;
    'address'?: string;

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
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<DeviceDocument>"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SaveObitRequest.attributeTypeMap;
    }
}


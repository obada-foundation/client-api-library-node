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
import { NFTData } from './nFTData';

/**
* OBADA NFT
*/
export class NFT {
    'classId'?: string;
    'id'?: string;
    'uri'?: string;
    'uriHash'?: string;
    'data'?: NFTData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "classId",
            "baseName": "class_id",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        },
        {
            "name": "uriHash",
            "baseName": "uri_hash",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "NFTData"
        }    ];

    static getAttributeTypeMap() {
        return NFT.attributeTypeMap;
    }
}

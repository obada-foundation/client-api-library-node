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
import { NFTDocument } from './nFTDocument';

export class NFTData {
    'trustAnchorToken'?: string;
    'usn'?: string;
    'checksum'?: string;
    'documents'?: Array<NFTDocument>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trustAnchorToken",
            "baseName": "trust_anchor_token",
            "type": "string"
        },
        {
            "name": "usn",
            "baseName": "usn",
            "type": "string"
        },
        {
            "name": "checksum",
            "baseName": "checksum",
            "type": "string"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<NFTDocument>"
        }    ];

    static getAttributeTypeMap() {
        return NFTData.attributeTypeMap;
    }
}

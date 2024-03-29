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

export class ObitsMeta {
    'total'?: number;
    'perPage'?: number;
    'currentPage'?: number;
    'lastPage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "perPage",
            "baseName": "per_page",
            "type": "number"
        },
        {
            "name": "currentPage",
            "baseName": "current_page",
            "type": "number"
        },
        {
            "name": "lastPage",
            "baseName": "last_page",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ObitsMeta.attributeTypeMap;
    }
}


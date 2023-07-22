/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AliasActionEnum } from './AliasActionEnum';
import {
    AliasActionEnumFromJSON,
    AliasActionEnumFromJSONTyped,
    AliasActionEnumToJSON,
} from './AliasActionEnum';

/**
 * 
 * @export
 * @interface MosaicAliasTransactionBodyDTO
 */
export interface MosaicAliasTransactionBodyDTO {
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof MosaicAliasTransactionBodyDTO
     */
    namespaceId: string;
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof MosaicAliasTransactionBodyDTO
     */
    mosaicId: string;
    /**
     * 
     * @type {AliasActionEnum}
     * @memberof MosaicAliasTransactionBodyDTO
     */
    aliasAction: AliasActionEnum;
}

/**
 * Check if a given object implements the MosaicAliasTransactionBodyDTO interface.
 */
export function instanceOfMosaicAliasTransactionBodyDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "aliasAction" in value;

    return isInstance;
}

export function MosaicAliasTransactionBodyDTOFromJSON(json: any): MosaicAliasTransactionBodyDTO {
    return MosaicAliasTransactionBodyDTOFromJSONTyped(json, false);
}

export function MosaicAliasTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAliasTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespaceId': json['namespaceId'],
        'mosaicId': json['mosaicId'],
        'aliasAction': AliasActionEnumFromJSON(json['aliasAction']),
    };
}

export function MosaicAliasTransactionBodyDTOToJSON(value?: MosaicAliasTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespaceId': value.namespaceId,
        'mosaicId': value.mosaicId,
        'aliasAction': AliasActionEnumToJSON(value.aliasAction),
    };
}


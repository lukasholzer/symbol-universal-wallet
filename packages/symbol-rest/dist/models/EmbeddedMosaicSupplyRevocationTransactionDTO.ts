/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * 
 * @export
 * @interface EmbeddedMosaicSupplyRevocationTransactionDTO
 */
export interface EmbeddedMosaicSupplyRevocationTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    type: number;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    sourceAddress: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    amount: string;
}

/**
 * Check if a given object implements the EmbeddedMosaicSupplyRevocationTransactionDTO interface.
 */
export function instanceOfEmbeddedMosaicSupplyRevocationTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sourceAddress" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON(json: any): EmbeddedMosaicSupplyRevocationTransactionDTO {
    return EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicSupplyRevocationTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'sourceAddress': json['sourceAddress'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}

export function EmbeddedMosaicSupplyRevocationTransactionDTOToJSON(value?: EmbeddedMosaicSupplyRevocationTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'sourceAddress': value.sourceAddress,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
    };
}

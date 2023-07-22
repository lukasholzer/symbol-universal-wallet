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
/**
 * 
 * @export
 * @interface TransactionMetaDTO
 */
export interface TransactionMetaDTO {
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof TransactionMetaDTO
     */
    height: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionMetaDTO
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionMetaDTO
     */
    merkleComponentHash: string;
    /**
     * Transaction index within the block.
     * @type {number}
     * @memberof TransactionMetaDTO
     */
    index: number;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof TransactionMetaDTO
     */
    timestamp?: string;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof TransactionMetaDTO
     */
    feeMultiplier?: number;
}

/**
 * Check if a given object implements the TransactionMetaDTO interface.
 */
export function instanceOfTransactionMetaDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "merkleComponentHash" in value;
    isInstance = isInstance && "index" in value;

    return isInstance;
}

export function TransactionMetaDTOFromJSON(json: any): TransactionMetaDTO {
    return TransactionMetaDTOFromJSONTyped(json, false);
}

export function TransactionMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMetaDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': json['height'],
        'hash': json['hash'],
        'merkleComponentHash': json['merkleComponentHash'],
        'index': json['index'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'feeMultiplier': !exists(json, 'feeMultiplier') ? undefined : json['feeMultiplier'],
    };
}

export function TransactionMetaDTOToJSON(value?: TransactionMetaDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'hash': value.hash,
        'merkleComponentHash': value.merkleComponentHash,
        'index': value.index,
        'timestamp': value.timestamp,
        'feeMultiplier': value.feeMultiplier,
    };
}


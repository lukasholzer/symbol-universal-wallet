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
import type { MerkleStateInfoDTOTreeInner } from './MerkleStateInfoDTOTreeInner';
import {
    MerkleStateInfoDTOTreeInnerFromJSON,
    MerkleStateInfoDTOTreeInnerFromJSONTyped,
    MerkleStateInfoDTOTreeInnerToJSON,
} from './MerkleStateInfoDTOTreeInner';

/**
 * The merkle path information clients can use to proof the state of the given entity.
 * @export
 * @interface MerkleStateInfoDTO
 */
export interface MerkleStateInfoDTO {
    /**
     * The hex information of the complete merkle tree as returned by server api.
     * More information can be found in chapter 4.3 of the catapult whitepaper.
     * @type {string}
     * @memberof MerkleStateInfoDTO
     */
    raw: string;
    /**
     * Merkle tree parsed from merkle tree raw.
     * @type {Array<MerkleStateInfoDTOTreeInner>}
     * @memberof MerkleStateInfoDTO
     */
    tree: Array<MerkleStateInfoDTOTreeInner>;
}

/**
 * Check if a given object implements the MerkleStateInfoDTO interface.
 */
export function instanceOfMerkleStateInfoDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "raw" in value;
    isInstance = isInstance && "tree" in value;

    return isInstance;
}

export function MerkleStateInfoDTOFromJSON(json: any): MerkleStateInfoDTO {
    return MerkleStateInfoDTOFromJSONTyped(json, false);
}

export function MerkleStateInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleStateInfoDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'raw': json['raw'],
        'tree': ((json['tree'] as Array<any>).map(MerkleStateInfoDTOTreeInnerFromJSON)),
    };
}

export function MerkleStateInfoDTOToJSON(value?: MerkleStateInfoDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'raw': value.raw,
        'tree': ((value.tree as Array<any>).map(MerkleStateInfoDTOTreeInnerToJSON)),
    };
}


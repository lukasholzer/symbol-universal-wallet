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
import type { AccountLinkPublicKeyDTO } from './AccountLinkPublicKeyDTO';
import {
    AccountLinkPublicKeyDTOFromJSON,
    AccountLinkPublicKeyDTOFromJSONTyped,
    AccountLinkPublicKeyDTOToJSON,
} from './AccountLinkPublicKeyDTO';
import type { AccountLinkVotingKeysDTO } from './AccountLinkVotingKeysDTO';
import {
    AccountLinkVotingKeysDTOFromJSON,
    AccountLinkVotingKeysDTOFromJSONTyped,
    AccountLinkVotingKeysDTOToJSON,
} from './AccountLinkVotingKeysDTO';

/**
 * 
 * @export
 * @interface SupplementalPublicKeysDTO
 */
export interface SupplementalPublicKeysDTO {
    /**
     * 
     * @type {AccountLinkPublicKeyDTO}
     * @memberof SupplementalPublicKeysDTO
     */
    linked?: AccountLinkPublicKeyDTO;
    /**
     * 
     * @type {AccountLinkPublicKeyDTO}
     * @memberof SupplementalPublicKeysDTO
     */
    node?: AccountLinkPublicKeyDTO;
    /**
     * 
     * @type {AccountLinkPublicKeyDTO}
     * @memberof SupplementalPublicKeysDTO
     */
    vrf?: AccountLinkPublicKeyDTO;
    /**
     * 
     * @type {AccountLinkVotingKeysDTO}
     * @memberof SupplementalPublicKeysDTO
     */
    voting?: AccountLinkVotingKeysDTO;
}

/**
 * Check if a given object implements the SupplementalPublicKeysDTO interface.
 */
export function instanceOfSupplementalPublicKeysDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SupplementalPublicKeysDTOFromJSON(json: any): SupplementalPublicKeysDTO {
    return SupplementalPublicKeysDTOFromJSONTyped(json, false);
}

export function SupplementalPublicKeysDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupplementalPublicKeysDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linked': !exists(json, 'linked') ? undefined : AccountLinkPublicKeyDTOFromJSON(json['linked']),
        'node': !exists(json, 'node') ? undefined : AccountLinkPublicKeyDTOFromJSON(json['node']),
        'vrf': !exists(json, 'vrf') ? undefined : AccountLinkPublicKeyDTOFromJSON(json['vrf']),
        'voting': !exists(json, 'voting') ? undefined : AccountLinkVotingKeysDTOFromJSON(json['voting']),
    };
}

export function SupplementalPublicKeysDTOToJSON(value?: SupplementalPublicKeysDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linked': AccountLinkPublicKeyDTOToJSON(value.linked),
        'node': AccountLinkPublicKeyDTOToJSON(value.node),
        'vrf': AccountLinkPublicKeyDTOToJSON(value.vrf),
        'voting': AccountLinkVotingKeysDTOToJSON(value.voting),
    };
}


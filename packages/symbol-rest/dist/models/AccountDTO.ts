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
import type { AccountTypeEnum } from './AccountTypeEnum';
import {
    AccountTypeEnumFromJSON,
    AccountTypeEnumFromJSONTyped,
    AccountTypeEnumToJSON,
} from './AccountTypeEnum';
import type { ActivityBucketDTO } from './ActivityBucketDTO';
import {
    ActivityBucketDTOFromJSON,
    ActivityBucketDTOFromJSONTyped,
    ActivityBucketDTOToJSON,
} from './ActivityBucketDTO';
import type { Mosaic } from './Mosaic';
import {
    MosaicFromJSON,
    MosaicFromJSONTyped,
    MosaicToJSON,
} from './Mosaic';
import type { SupplementalPublicKeysDTO } from './SupplementalPublicKeysDTO';
import {
    SupplementalPublicKeysDTOFromJSON,
    SupplementalPublicKeysDTOFromJSONTyped,
    SupplementalPublicKeysDTOToJSON,
} from './SupplementalPublicKeysDTO';

/**
 * 
 * @export
 * @interface AccountDTO
 */
export interface AccountDTO {
    /**
     * The version of the state
     * @type {number}
     * @memberof AccountDTO
     */
    version: number;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AccountDTO
     */
    address: string;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof AccountDTO
     */
    addressHeight: string;
    /**
     * Public key.
     * @type {string}
     * @memberof AccountDTO
     */
    publicKey: string;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof AccountDTO
     */
    publicKeyHeight: string;
    /**
     * 
     * @type {AccountTypeEnum}
     * @memberof AccountDTO
     */
    accountType: AccountTypeEnum;
    /**
     * 
     * @type {SupplementalPublicKeysDTO}
     * @memberof AccountDTO
     */
    supplementalPublicKeys: SupplementalPublicKeysDTO;
    /**
     * 
     * @type {Array<ActivityBucketDTO>}
     * @memberof AccountDTO
     */
    activityBuckets: Array<ActivityBucketDTO>;
    /**
     * Mosaic units owned.
     * @type {Array<Mosaic>}
     * @memberof AccountDTO
     */
    mosaics: Array<Mosaic>;
    /**
     * Probability of an account to harvest the next block.
     * @type {string}
     * @memberof AccountDTO
     */
    importance: string;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof AccountDTO
     */
    importanceHeight: string;
}

/**
 * Check if a given object implements the AccountDTO interface.
 */
export function instanceOfAccountDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "addressHeight" in value;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "publicKeyHeight" in value;
    isInstance = isInstance && "accountType" in value;
    isInstance = isInstance && "supplementalPublicKeys" in value;
    isInstance = isInstance && "activityBuckets" in value;
    isInstance = isInstance && "mosaics" in value;
    isInstance = isInstance && "importance" in value;
    isInstance = isInstance && "importanceHeight" in value;

    return isInstance;
}

export function AccountDTOFromJSON(json: any): AccountDTO {
    return AccountDTOFromJSONTyped(json, false);
}

export function AccountDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'address': json['address'],
        'addressHeight': json['addressHeight'],
        'publicKey': json['publicKey'],
        'publicKeyHeight': json['publicKeyHeight'],
        'accountType': AccountTypeEnumFromJSON(json['accountType']),
        'supplementalPublicKeys': SupplementalPublicKeysDTOFromJSON(json['supplementalPublicKeys']),
        'activityBuckets': ((json['activityBuckets'] as Array<any>).map(ActivityBucketDTOFromJSON)),
        'mosaics': ((json['mosaics'] as Array<any>).map(MosaicFromJSON)),
        'importance': json['importance'],
        'importanceHeight': json['importanceHeight'],
    };
}

export function AccountDTOToJSON(value?: AccountDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'address': value.address,
        'addressHeight': value.addressHeight,
        'publicKey': value.publicKey,
        'publicKeyHeight': value.publicKeyHeight,
        'accountType': AccountTypeEnumToJSON(value.accountType),
        'supplementalPublicKeys': SupplementalPublicKeysDTOToJSON(value.supplementalPublicKeys),
        'activityBuckets': ((value.activityBuckets as Array<any>).map(ActivityBucketDTOToJSON)),
        'mosaics': ((value.mosaics as Array<any>).map(MosaicToJSON)),
        'importance': value.importance,
        'importanceHeight': value.importanceHeight,
    };
}


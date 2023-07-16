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
/**
 * 
 * @export
 * @interface MosaicDTO
 */
export interface MosaicDTO {
    /**
     * The version of the state
     * @type {number}
     * @memberof MosaicDTO
     */
    version: number;
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof MosaicDTO
     */
    id: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicDTO
     */
    supply: string;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof MosaicDTO
     */
    startHeight: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof MosaicDTO
     */
    ownerAddress: string;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicDTO
     */
    revision: number;
    /**
     * - 0x00 (none) - No flags present.
     * - 0x01 (supplyMutable) - Mosaic supports supply changes even when mosaic owner owns partial supply.
     * - 0x02 (transferable) - Mosaic supports transfers between arbitrary accounts. When not set, mosaic can only be transferred to and from mosaic owner.
     * - 0x04 (restrictable) - Mosaic supports custom restrictions configured by mosaic owner.
     * - 0x08 (revokable) - Mosaic allows creator to revoke balances from another user.
     * @type {number}
     * @memberof MosaicDTO
     */
    flags: number;
    /**
     * Determines up to what decimal place the mosaic can be divided.
     * Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics.
     * The divisibility must be in the range of 0 and 6.
     * @type {number}
     * @memberof MosaicDTO
     */
    divisibility: number;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MosaicDTO
     */
    duration: string;
}

/**
 * Check if a given object implements the MosaicDTO interface.
 */
export function instanceOfMosaicDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "supply" in value;
    isInstance = isInstance && "startHeight" in value;
    isInstance = isInstance && "ownerAddress" in value;
    isInstance = isInstance && "revision" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "divisibility" in value;
    isInstance = isInstance && "duration" in value;

    return isInstance;
}

export function MosaicDTOFromJSON(json: any): MosaicDTO {
    return MosaicDTOFromJSONTyped(json, false);
}

export function MosaicDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'id': json['id'],
        'supply': json['supply'],
        'startHeight': json['startHeight'],
        'ownerAddress': json['ownerAddress'],
        'revision': json['revision'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
        'duration': json['duration'],
    };
}

export function MosaicDTOToJSON(value?: MosaicDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'id': value.id,
        'supply': value.supply,
        'startHeight': value.startHeight,
        'ownerAddress': value.ownerAddress,
        'revision': value.revision,
        'flags': value.flags,
        'divisibility': value.divisibility,
        'duration': value.duration,
    };
}

import { LinkActionEnumFromJSON, LinkActionEnumToJSON, } from './LinkActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfEmbeddedVrfKeyLinkTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "linkAction" in value;
    return isInstance;
}
export function EmbeddedVrfKeyLinkTransactionDTOFromJSON(json) {
    return EmbeddedVrfKeyLinkTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedVrfKeyLinkTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
    };
}
export function EmbeddedVrfKeyLinkTransactionDTOToJSON(value) {
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
        'linkedPublicKey': value.linkedPublicKey,
        'linkAction': LinkActionEnumToJSON(value.linkAction),
    };
}

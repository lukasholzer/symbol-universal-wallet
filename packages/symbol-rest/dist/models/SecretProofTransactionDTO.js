import { LockHashAlgorithmEnumFromJSON, LockHashAlgorithmEnumToJSON, } from './LockHashAlgorithmEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfSecretProofTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    isInstance = isInstance && "proof" in value;
    return isInstance;
}
export function SecretProofTransactionDTOFromJSON(json) {
    return SecretProofTransactionDTOFromJSONTyped(json, false);
}
export function SecretProofTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
        'proof': json['proof'],
    };
}
export function SecretProofTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
        'proof': value.proof,
    };
}

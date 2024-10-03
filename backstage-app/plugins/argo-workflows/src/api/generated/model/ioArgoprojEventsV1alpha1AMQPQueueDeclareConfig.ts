// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig {
    'arguments'?: string;
    'autoDelete'?: boolean;
    'durable'?: boolean;
    'exclusive'?: boolean;
    'name'?: string;
    'noWait'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "arguments",
            "baseName": "arguments",
            "type": "string"
        },
        {
            "name": "autoDelete",
            "baseName": "autoDelete",
            "type": "boolean"
        },
        {
            "name": "durable",
            "baseName": "durable",
            "type": "boolean"
        },
        {
            "name": "exclusive",
            "baseName": "exclusive",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "noWait",
            "baseName": "noWait",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig.attributeTypeMap;
    }
}


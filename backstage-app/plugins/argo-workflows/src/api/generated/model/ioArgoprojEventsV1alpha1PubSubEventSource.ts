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
import { IoArgoprojEventsV1alpha1EventSourceFilter } from './ioArgoprojEventsV1alpha1EventSourceFilter';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

/**
* PubSubEventSource refers to event-source for GCP PubSub related events.
*/
export class IoArgoprojEventsV1alpha1PubSubEventSource {
    'credentialSecret'?: IoK8sApiCoreV1SecretKeySelector;
    'deleteSubscriptionOnFinish'?: boolean;
    'filter'?: IoArgoprojEventsV1alpha1EventSourceFilter;
    'jsonBody'?: boolean;
    'metadata'?: { [key: string]: string; };
    'projectID'?: string;
    'subscriptionID'?: string;
    'topic'?: string;
    'topicProjectID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "credentialSecret",
            "baseName": "credentialSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "deleteSubscriptionOnFinish",
            "baseName": "deleteSubscriptionOnFinish",
            "type": "boolean"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1EventSourceFilter"
        },
        {
            "name": "jsonBody",
            "baseName": "jsonBody",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "projectID",
            "baseName": "projectID",
            "type": "string"
        },
        {
            "name": "subscriptionID",
            "baseName": "subscriptionID",
            "type": "string"
        },
        {
            "name": "topic",
            "baseName": "topic",
            "type": "string"
        },
        {
            "name": "topicProjectID",
            "baseName": "topicProjectID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1PubSubEventSource.attributeTypeMap;
    }
}


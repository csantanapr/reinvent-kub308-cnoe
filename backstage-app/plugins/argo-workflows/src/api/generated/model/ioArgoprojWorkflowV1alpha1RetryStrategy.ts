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
import { IoArgoprojWorkflowV1alpha1Backoff } from './ioArgoprojWorkflowV1alpha1Backoff';
import { IoArgoprojWorkflowV1alpha1RetryAffinity } from './ioArgoprojWorkflowV1alpha1RetryAffinity';

/**
* RetryStrategy provides controls on how to retry a workflow step
*/
export class IoArgoprojWorkflowV1alpha1RetryStrategy {
    'affinity'?: IoArgoprojWorkflowV1alpha1RetryAffinity;
    'backoff'?: IoArgoprojWorkflowV1alpha1Backoff;
    /**
    * Expression is a condition expression for when a node will be retried. If it evaluates to false, the node will not be retried and the retry strategy will be ignored
    */
    'expression'?: string;
    'limit'?: string;
    /**
    * RetryPolicy is a policy of NodePhase statuses that will be retried
    */
    'retryPolicy'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "IoArgoprojWorkflowV1alpha1RetryAffinity"
        },
        {
            "name": "backoff",
            "baseName": "backoff",
            "type": "IoArgoprojWorkflowV1alpha1Backoff"
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "string"
        },
        {
            "name": "retryPolicy",
            "baseName": "retryPolicy",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1RetryStrategy.attributeTypeMap;
    }
}


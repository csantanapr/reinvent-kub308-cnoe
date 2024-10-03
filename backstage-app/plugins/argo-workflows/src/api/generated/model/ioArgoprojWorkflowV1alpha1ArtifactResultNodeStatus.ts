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
import { IoArgoprojWorkflowV1alpha1ArtifactResult } from './ioArgoprojWorkflowV1alpha1ArtifactResult';

/**
* ArtifactResultNodeStatus describes the result of the deletion on a given node
*/
export class IoArgoprojWorkflowV1alpha1ArtifactResultNodeStatus {
    /**
    * ArtifactResults maps Artifact name to result of the deletion
    */
    'artifactResults'?: { [key: string]: IoArgoprojWorkflowV1alpha1ArtifactResult; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "artifactResults",
            "baseName": "artifactResults",
            "type": "{ [key: string]: IoArgoprojWorkflowV1alpha1ArtifactResult; }"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1ArtifactResultNodeStatus.attributeTypeMap;
    }
}


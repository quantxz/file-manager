/// <reference types="node" />
import { AzureOptions } from "../../../types/configurers/azure-options";
export declare class AzureStorageConfigurer {
    private readonly blobServiceClient;
    constructor(options: AzureOptions);
    uploadFile(containerName: string, blobName: string, fileData: Buffer): Promise<void>;
}
export default AzureStorageConfigurer;

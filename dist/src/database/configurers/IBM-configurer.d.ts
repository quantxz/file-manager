/// <reference types="node" />
import { IbmOptions } from '../../../types/configurers/ibm-options';
declare class IBMCloudObjectStorageConfigurer {
    private readonly cos;
    constructor(options: IbmOptions);
    uploadFile(bucketName: string, fileName: string, fileData: Buffer): Promise<void>;
}
export default IBMCloudObjectStorageConfigurer;

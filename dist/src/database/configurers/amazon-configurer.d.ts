/// <reference types="node" />
import { AmazonOptions } from '../../../types/configurers/amazon-options';
declare class AmazonConfigurer {
    private s3;
    constructor(options: AmazonOptions);
    uploadFile(bucketName: string, key: string, body: Buffer): Promise<string>;
}
export default AmazonConfigurer;

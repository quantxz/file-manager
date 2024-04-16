import * as OSS from 'ali-oss';
import { AliossOptions } from '../../../types/configurers/alioss-options';

class AliOSSConfigurer {
    private readonly client: OSS;

    constructor(options: AliossOptions) {
        this.client = new OSS({
            accessKeyId: options.accessKeyId,
            accessKeySecret: options.accessKeySecret,
            region: options.region,
            bucket: options.bucket
        });
    }

    async uploadFile(objectKey: string, filePath: string): Promise<void> {
        try {
            // Fazer upload do arquivo para o OSS
            await this.client.put(objectKey, filePath);
            console.log(`File ${filePath} uploaded successfully with key ${objectKey}`);
        } catch (error) {
            console.error(`Error uploading file ${filePath} with key ${objectKey}:`, error);
        }
    }

    // Outros métodos para interagir com o OSS...
}

export default AliOSSConfigurer

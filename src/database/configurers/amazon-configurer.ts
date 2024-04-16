import AWS from 'aws-sdk';
import { AmazonOptions } from '../../../types/configurers/amazon-options';

class AmazonConfigurer {
    private s3: AWS.S3;

    constructor(options: AmazonOptions) {
        AWS.config.update({
            accessKeyId: options.accessKeyId,
            secretAccessKey: options.secretAccessKey,
        });

        this.s3 = new AWS.S3();
    }

    // Método para fazer upload de um arquivo para o Amazon S3
    async uploadFile(bucketName: string, key: string, body: Buffer): Promise<string> {
        const params: AWS.S3.PutObjectRequest = {
            Bucket: bucketName,
            Key: key,
            Body: body,
        };

        try {
            const result = await this.s3.upload(params).promise();
            return result.Location;
        } catch (error) {
            console.error('Erro ao fazer upload do arquivo:', error);
            throw error;
        }
    }

    // Outros métodos para interagir com o Amazon S3 podem ser adicionados aqui, como listar buckets, listar objetos, etc.
} 

export default AmazonConfigurer;
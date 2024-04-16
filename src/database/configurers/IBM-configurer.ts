import COS from 'ibm-cos-sdk';
import { IbmOptions } from '../../../types/configurers/ibm-options';

class IBMCloudObjectStorageConfigurer {
    private readonly cos: COS.S3;

    constructor(options: IbmOptions) {
        // Configuração do IBM Cloud Object Storage
        this.cos = new COS.S3({
            endpoint: options.endpoint, // Endpoint do IBM Cloud Object Storage
            apiKeyId: options.apiKeyId, // ID da chave de API
            serviceInstanceId: 'crn:v1:bluemix:public:iam-identity::a/**********::serviceid:ServiceId-**********', // ID da instância do serviço
            ibmAuthEndpoint: 'https://iam.cloud.ibm.com/identity/token', // Endpoint de autenticação do IBM Cloud IAM
        });
    }

    async uploadFile(bucketName: string, fileName: string, fileData: Buffer): Promise<void> {
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: fileData,
        };

        try {
            await this.cos.upload(params).promise();
            console.log(`File ${fileName} uploaded successfully to bucket ${bucketName}`);
        } catch (error) {
            console.error(`Error uploading file ${fileName} to bucket ${bucketName}:`, error);
        }
    }

}

export default IBMCloudObjectStorageConfigurer

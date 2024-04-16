import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob";
import { AzureOptions } from "../../../types/configurers/azure-options";

export class AzureStorageConfigurer {
    private readonly blobServiceClient: BlobServiceClient;

    constructor(options: AzureOptions) {
        // Credenciais de acesso ao Azure Blob Storage
        const sharedKeyCredential = new StorageSharedKeyCredential(options.accountName, options.accountKey);

        // URL do serviço de armazenamento do Azure Blob
        const blobServiceUrl = `https://${options.accountName}.blob.core.windows.net`;

        // Cliente do serviço de armazenamento do Azure Blob
        this.blobServiceClient = new BlobServiceClient(blobServiceUrl, sharedKeyCredential);
    }

    async uploadFile(containerName: string, blobName: string, fileData: Buffer): Promise<void> {
        // Cliente do contêiner do Azure Blob
        const containerClient = this.blobServiceClient.getContainerClient(containerName);

        // Criar o contêiner se não existir
        await containerClient.createIfNotExists();

        // Cliente do blob do Azure Blob
        const blobClient = containerClient.getBlockBlobClient(blobName);

        // Fazer o upload do arquivo para o blob
        try {
            await blobClient.uploadData(fileData);
            console.log(`File ${blobName} uploaded successfully to container ${containerName}`);
        } catch (error) {
            console.error(`Error uploading file ${blobName} to container ${containerName}:`, error);
        }
    }

}

export default AzureStorageConfigurer
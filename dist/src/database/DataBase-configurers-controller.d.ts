import { AliossOptions } from "../../types/configurers/alioss-options";
import { AmazonOptions } from "../../types/configurers/amazon-options";
import { AzureOptions } from "../../types/configurers/azure-options";
import { IbmOptions } from "../../types/configurers/ibm-options";
import AliOSSConfigurer from "./configurers/alioss-configurer";
import AmazonConfigurer from "./configurers/amazon-configurer";
import AzureStorageConfigurer from "./configurers/azure-configurer";
import IBMCloudObjectStorageConfigurer from "./configurers/IBM-configurer";
declare class DataBaseConfigures {
    private readonly amazonConfigurer;
    private readonly azureStorageConfigurer;
    private readonly ibmCloudObjectStorageConfigurer;
    private readonly aliossConfigurer;
    constructor(Db: string, options?: AmazonOptions | AzureOptions | IbmOptions | AliossOptions);
    getAmazonConfigurer(): AmazonConfigurer | undefined;
    getAzureStorageConfigurer(): AzureStorageConfigurer | undefined;
    getIBMCloudStorage(): IBMCloudObjectStorageConfigurer | undefined;
    getAliossStorage(): AliOSSConfigurer | undefined;
}
export default DataBaseConfigures;

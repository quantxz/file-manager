import { AliossOptions } from "../../types/configurers/alioss-options";
import { AmazonOptions } from "../../types/configurers/amazon-options";
import { AzureOptions } from "../../types/configurers/azure-options";
import { IbmOptions } from "../../types/configurers/ibm-options";
import AliOSSConfigurer from "./configurers/alioss-configurer";
import AmazonConfigurer from "./configurers/amazon-configurer";
import AzureStorageConfigurer from "./configurers/azure-configurer";
import IBMCloudObjectStorageConfigurer from "./configurers/IBM-configurer";

class DataBaseConfigures {
    private readonly amazonConfigurer: AmazonConfigurer | undefined;
    private readonly azureStorageConfigurer: AzureStorageConfigurer | undefined;
    private readonly ibmCloudObjectStorageConfigurer: IBMCloudObjectStorageConfigurer | undefined;
    private readonly aliossConfigurer: AliOSSConfigurer | undefined;

    constructor(Db: string, options?: AmazonOptions | AzureOptions | IbmOptions | AliossOptions) {

        switch (Db) {
            case "Amazon":
                this.amazonConfigurer = new AmazonConfigurer(options as AmazonOptions);
                break;
            case "Azure":
                this.azureStorageConfigurer = new AzureStorageConfigurer(options as AzureOptions);
                break;
            case "IBM":
                this.ibmCloudObjectStorageConfigurer = new IBMCloudObjectStorageConfigurer(options as IbmOptions);
                break;
            case "ALIOSS":
                this.aliossConfigurer = new AliOSSConfigurer(options as AliossOptions);
                break;
            case "": 
                break;
            default:
                throw Error("Database not supported or not exists");
        }
    }

    getAmazonConfigurer(): AmazonConfigurer | undefined {
        return this.amazonConfigurer;
    }

    getAzureStorageConfigurer(): AzureStorageConfigurer | undefined {
        return this.azureStorageConfigurer;
    }

    getIBMCloudStorage(): IBMCloudObjectStorageConfigurer | undefined {
        return this.ibmCloudObjectStorageConfigurer; 
    }

    getAliossStorage(): AliOSSConfigurer | undefined {
        return this.aliossConfigurer;
    }
}

export default DataBaseConfigures;

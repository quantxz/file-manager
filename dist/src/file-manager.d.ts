import { FileDto } from "../types/file-type";
import { Options } from "../types/options";
import { AmazonOptions } from "../types/configurers/amazon-options";
import { AzureOptions } from "../types/configurers/azure-options";
import { IbmOptions } from "../types/configurers/ibm-options";
import { AliossOptions } from "../types/configurers/alioss-options";
export declare class FilesManager {
    static readonly imageTypesList: string[];
    static readonly videoTypesList: string[];
    private static databaseConfigurer;
    private static dbExists;
    constructor(DbExists: boolean, dbName: string, options?: AmazonOptions | AzureOptions | IbmOptions | AliossOptions);
    static filePipe<T extends string>(acceptedFileTypes: T, file: FileDto, folderPathToSave: string, options?: Options): Promise<string | {}>;
    static ReadExtension(fileName: string): string;
}

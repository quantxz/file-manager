import { FileDto } from "../types/file-type";
import * as fs from 'fs-extra';
import * as path from 'path';
import * as crypto from 'crypto';
import { Options } from "../types/options";
import DataBaseConfigures from "./database/DataBase-configurers-controller"
import { AmazonOptions } from "../types/configurers/amazon-options";
import { AzureOptions } from "../types/configurers/azure-options";
import { IbmOptions } from "../types/configurers/ibm-options";
import { AliossOptions } from "../types/configurers/alioss-options";

export class FilesManager {
    static readonly imageTypesList: string[] = ["jpg", "gif", "png", "svg", "webp", "raw", "tiff", "bmp", "pdf"];
    static readonly videoTypesList: string[] = ["mp4", "avi", "mov", "mkv", "wmv", "flv", "webm", "m4v"];
    private static databaseConfigurer: DataBaseConfigures;
    private static dbExists: boolean = false;


    constructor(DbExists: boolean, dbName: string, options?: AmazonOptions | AzureOptions | IbmOptions | AliossOptions) {
        FilesManager.dbExists = DbExists;

        if(FilesManager.dbExists) {
            FilesManager.databaseConfigurer = new DataBaseConfigures(dbName, options)
        }

    }   

    static async filePipe<T extends string>(
        acceptedFileTypes: T,
        file: FileDto,
        folderPathToSave: string,
        options?: Options
    ): Promise<string | {}> {

        const fileType = this.ReadExtension(file.originalname);
        const fileWeightInMb = file.size / (1024 * 1024);
        let allowedTypes: string[];
        const fileTypeString = acceptedFileTypes as unknown as string;

        switch (fileTypeString) {
            case "all":
                allowedTypes = this.imageTypesList.concat(this.videoTypesList);
                break;
            case "image":
                allowedTypes = this.imageTypesList;
                break;
            case "video":
                allowedTypes = this.videoTypesList;
                break;
            default:
                return "Invalid file type";
        }

        if (this.dbExists) { }

        if (options && fileWeightInMb >= options.fileWeight) {
            return { error: `The file weight is more than ${options.fileWeight}Mb` };
        }

        if (!allowedTypes.includes(fileType)) {
            return { error: `Unsupported file type: ${fileType}` };
        }

        const timestamp = new Date().getTime();
        const hash = crypto.randomBytes(8).toString('hex');
        const fileName = `${timestamp}_${hash}.${fileType}`;

        await fs.ensureDir(folderPathToSave);
        fs.writeFileSync(path.join(folderPathToSave, fileName), file.buffer);

        return fileName;
    }

    static ReadExtension(fileName: string): string {
        const originalName = fileName.toLowerCase();
        const extension: string[] = originalName.split(".");
        return extension[extension.length - 1];
    }
}


import { AliossOptions } from '../../../types/configurers/alioss-options';
declare class AliOSSConfigurer {
    private readonly client;
    constructor(options: AliossOptions);
    uploadFile(objectKey: string, filePath: string): Promise<void>;
}
export default AliOSSConfigurer;

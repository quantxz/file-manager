# Types
### CONFIGURERS ⚙️
* IBM: 
    ```
        apiKeyId: string;
        apiSecretKey?: string; 
        endpoint: string;
    ```
* Azure:
    ```
        accountName: string;
        accountKey: string;
    ```
* Amazon:
    ```
        accessKeyId: string;
        secretAccessKey: string;
    ```
* AliOSS:
    ```
        accessKeyId: string;
        accessKeySecret: string;
        region: string;
        bucket: string;
    ```
### Files 📁
* File-Dto:
    ```
        fileName:       string;
        originalname:   string;
        mimeType:       string;
        buffer:         Buffer;
        size:           number;
    ```
### Class 📦
* FilesManager:
    * constrcutor parameters:
        * DbExists: ``boolean``
        * DbName:   ``string``
        * options:  ``options can be of one of the CONFIGURERS types``
* DataBaseConfigures:
    * constrcutor parameters:
        * Db: ``string``    

            ```
            the valid options for Db be:
            "Amazon";
            "IBM";
            "ALIOSS";
            "Azure"
            ```

        * options:  ``options can be of one of the CONFIGURERS types``
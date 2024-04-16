"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var alioss_configurer_1 = __importDefault(require("./configurers/alioss-configurer"));
var amazon_configurer_1 = __importDefault(require("./configurers/amazon-configurer"));
var azure_configurer_1 = __importDefault(require("./configurers/azure-configurer"));
var IBM_configurer_1 = __importDefault(require("./configurers/IBM-configurer"));
var DataBaseConfigures = /** @class */ (function () {
    function DataBaseConfigures(Db, options) {
        switch (Db) {
            case "Amazon":
                this.amazonConfigurer = new amazon_configurer_1.default(options);
                break;
            case "Azure":
                this.azureStorageConfigurer = new azure_configurer_1.default(options);
                break;
            case "IBM":
                this.ibmCloudObjectStorageConfigurer = new IBM_configurer_1.default(options);
                break;
            case "ALIOSS":
                this.aliossConfigurer = new alioss_configurer_1.default(options);
                break;
            case "":
                break;
            default:
                throw Error("Database not supported or not exists");
        }
    }
    DataBaseConfigures.prototype.getAmazonConfigurer = function () {
        return this.amazonConfigurer;
    };
    DataBaseConfigures.prototype.getAzureStorageConfigurer = function () {
        return this.azureStorageConfigurer;
    };
    DataBaseConfigures.prototype.getIBMCloudStorage = function () {
        return this.ibmCloudObjectStorageConfigurer;
    };
    DataBaseConfigures.prototype.getAliossStorage = function () {
        return this.aliossConfigurer;
    };
    return DataBaseConfigures;
}());
exports.default = DataBaseConfigures;

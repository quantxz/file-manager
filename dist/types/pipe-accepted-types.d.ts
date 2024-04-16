import { FileDto } from "./file-type";
export interface FilesType<T extends string> {
    all: T extends "all" ? FileDto : never;
    image: T extends "image" ? FileDto : never;
    video: T extends "video" ? FileDto : never;
}

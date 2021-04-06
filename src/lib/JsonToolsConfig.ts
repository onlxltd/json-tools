import { KeyValue }   from "./Utils";

export interface JsonToolsConfig {
  data          : any
  emitOnPush    : boolean,
  separator     : string
}

export class Config implements JsonToolsConfig {
  data          : any
  emitOnPush    : boolean
  separator     : string

  constructor(data: KeyValue, emitOnPush: boolean = true, separator: string = '/') {
    this.data         = data
    this.emitOnPush   = emitOnPush
    this.separator    = separator
  }
}
export namespace StoreState {

    export type Enthusiasm = {
      languageName: string;
      enthusiasmLevel: number;
    }
  
    export type All = {
      enthusiasm: Enthusiasm
    }
  }
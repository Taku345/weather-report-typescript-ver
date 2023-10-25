export type areaObjType = {
  centers: {
    [key: string]: {
      name: string;
      enName: string;
      officeName: string;
      children: string[];
    };
  };
  offices: {
    [key: string]: {
      name: string;
      enName: string;
      officeName: string;
      parent: string;
      children: string[];
    };
  };
}

export type areaArrayType = Array<[string, areaObjType["centers"]["anyKey"]]>;

export type initStateType = {
  areaObj: areaObjType;
  areaArray: Array<[string, areaObjType["centers"]["anyKey"]]>;
  subAreaArray: Array<[string, string]>; //右記はタプル型 Array<[string, string]> と [string,string][];
  status: string;
}
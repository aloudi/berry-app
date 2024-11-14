import { FIRMNESS } from "../constants";

export interface IBerry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: {
    name: FIRMNESS;
    url: string;
  };
  flavors: [IFlavor];
  item: {
    name: string;
    url: string;
  }
  natural_gift_type: {
    name: string;
    url: string;
  }
}

export interface IFlavor {
  potency: number;
  flavor: {
    name: string;
    url: string;
  }
}
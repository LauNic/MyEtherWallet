import { TypeKeys } from './constants';
/*** Change Language ***/
export interface ChangeLanguageAction {
  type: TypeKeys.CONFIG_LANGUAGE_CHANGE;
  value: string;
}

/*** Change Node ***/
export interface ChangeNodeAction {
  type: TypeKeys.CONFIG_NODE_CHANGE;
  // FIXME $keyof?
  value: string;
}

/*** Change gas price ***/
export interface ChangeGasPriceAction {
  type: TypeKeys.CONFIG_GAS_PRICE;
  value: number;
}

/*** Union Type ***/
export type ConfigAction =
  | ChangeNodeAction
  | ChangeLanguageAction
  | ChangeGasPriceAction;

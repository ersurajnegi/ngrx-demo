import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Set Current Product',
  InitializeCurrentProduct = '[Product] Set Current Product'
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor(public payload: boolean) {}
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
  constructor(public payload?: Product) {}
}
export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
  constructor(public payload?: Product) {}
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;
  constructor(public payload: Product) {}
}
// prettier-ignore
export type ProductActions = ToggleProductCode | SetCurrentProduct | ClearCurrentProduct | InitializeCurrentProduct;

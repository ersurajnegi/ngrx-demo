import { Product } from '../product';
import * as fromRoot from 'src/app/state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './product.actions';

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  currentProduct: null,
  showProductCode: true,
  products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const selectedProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(getProductFeatureState, state => state.products);

export function reducer(state: ProductState = initialState, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode: {
      return { ...state, showProductCode: action.payload };
    }

    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProduct: { ...action.payload }
      };

    case ProductActionTypes.ClearCurrentProduct: {
      return { ...state, currentProduct: null };
    }

    case ProductActionTypes.InitializeCurrentProduct: {
      return {
        ...state,
        currentProduct: {
          id: 0,
          productCode: 'New',
          productName: '',
          description: '',
          starRating: 0
        }
      };
    }
    default: {
      return state;
    }
  }
}

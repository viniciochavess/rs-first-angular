import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Products } from './pages/products/products';
import { NewProduct } from './pages/new-product/new-product';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path:"",
    component: Layout,
    children:[
      {
        path: 'products',
        component: Products
      },
      {
        path: 'new-product',
        component: NewProduct
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

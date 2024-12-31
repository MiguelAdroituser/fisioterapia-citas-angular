import { Routes } from '@angular/router';

import { AppSideLoginComponent } from 'src/app/pages/authentication/side-login/side-login.component';
import { AppSideRegisterComponent } from 'src/app/pages/authentication/side-register/side-register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
    ],
  },
];

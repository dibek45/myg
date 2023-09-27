import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
        children: [
                    {
                      path: 'new-user', // child route path
                      component: UserFormComponent, // child route component that the router renders
                    },
                    {
                      path: 'table', // child route path
                      component: UserTableComponent, // child route component that the router renders
                    }

        ], 
  },
  
  // Otras rutas y componentes relacionados del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutesRoutingModule { }

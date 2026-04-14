import { Routes } from '@angular/router';
import { BeneficioListComponent } from './components/beneficio-list/beneficio-list.component';
import { BeneficioFormComponent } from './components/beneficio-form/beneficio-form.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

export const routes: Routes = [
    { path: '', component: BeneficioListComponent },
    { path: 'novo', component: BeneficioFormComponent },
    { path: 'editar/:id', component: BeneficioFormComponent },
    { path: 'transferencia/:id', component: TransferenciaComponent }
];

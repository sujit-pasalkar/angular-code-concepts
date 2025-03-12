import { Routes } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { VirtualScrollForListComponent } from './components/virtual-scroll-for-list/virtual-scroll-for-list.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
    { path: 'parent', component: ParentComponent },
    { path: 'pb', component: ProgressBarComponent },
    { path: 'vs', component: VirtualScrollForListComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: 'calci', loadComponent: () => import('./components/calculator/calculator.component').then(c => c.CalculatorComponent) }

];

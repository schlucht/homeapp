import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/home/main/main.component';
import { BankComponent } from './components/home/bank/bank.component';
import { TravelComponent } from './components/home/travel/travel.component';
import { SportComponent } from './components/home/sport/sport.component';
import { BuyComponent } from './components/home/buy/buy.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    { path: 'home', component: MainComponent,
        children: [
            {
                path: 'bank', component: BankComponent
            },
            {
                path: 'travel', component: TravelComponent
            },
            {
                path: 'sport', component: SportComponent
            },
            {
                path: 'buy', component: BuyComponent
            }
        ]
    },
    { path: 'bank', component: BankComponent, },
    { path: 'travel', component: TravelComponent },
    { path: 'sport', component: SportComponent },
    { path: 'buy', component: BuyComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

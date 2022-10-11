import { NgModule } from "@angular/core";
import{Routes,RouterModule} from '@angular/router';
import{InicioComponent} from './components/inicio/inicio.component'
import{ContactoComponent} from './components/contacto/contacto.component'
import{PortfolioComponent} from './components/portfolio/portfolio.component'
import{SobreMiComponent} from './components/sobre-mi/sobre-mi.component'


const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'sobre-mi', component: SobreMiComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { sampleComponent } from './sample.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfSwitchComponent } from './if-switch/if-switch.component';
import { AttributeComponent } from './attribute/attribute.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

@NgModule({
  declarations: [
    AppComponent,
    sampleComponent,
    HeaderComponent,
    DataBindingComponent,
    TwoWayComponent,
    DirectivesComponent,
    IfSwitchComponent,
    AttributeComponent,
    MyDirectiveDirective,
    ParentComponent,
    ChildComponent,
    BikesComponent,
    BikeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

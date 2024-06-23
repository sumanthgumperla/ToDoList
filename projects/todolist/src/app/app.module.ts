import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IntelUserService } from './intel.service';
import { NewappComponent } from './newapp.component';
import { newService } from './new.service';


@NgModule({
  declarations: [NewappComponent ],
  imports: [ BrowserModule, HttpClientModule, FormsModule ],
  providers: [ newService ],
  bootstrap: [ NewappComponent ]
})
export class AppModule { }

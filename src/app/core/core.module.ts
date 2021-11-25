import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityGuard } from './guard/security.guard';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpService } from './services/http.service';
import { ManejadorError } from './interceptor/manejador-error';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SwalService } from './services/swal.service';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    MaterialModule,
    ReactiveFormsModule 
  ],
  providers: [
    HttpService,
    SecurityGuard,
    SwalService,
    { provide: ErrorHandler, useClass: ManejadorError }
  ]
})
export class CoreModule { }

import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

const matModule = [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule
]
@NgModule({
    imports: matModule,
    exports: matModule
})
export class MaterialModule { }
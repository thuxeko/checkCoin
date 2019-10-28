import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CardComponent} from './card/card.component';
import {CardToggleDirective} from './card/card-toggle.directive';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        CardToggleDirective,
        CardComponent
    ],
    declarations: [
        CardToggleDirective,
        CardComponent
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
}

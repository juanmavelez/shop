import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HighlightDirective, ExponentialPipe, FooterComponent],
  imports: [CommonModule],
})
export class SharedModule {}

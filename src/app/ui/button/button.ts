import { Component, input, ViewEncapsulation } from '@angular/core';
import { UtlOptional } from '../../core';
import { ButtonType } from './types/button.types';

@Component({
  selector: 'button[ui-button]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ui-button',
    '[class.primary]': 'variant() === "PRIMARY"',
    '[class.secondary]': 'variant() === "SECONDARY"',
    '[class.tranpsarent]': 'variant() === "TRANSPARENT"',
    '[class.filled]': 'isFilled()',
  },
})
export class Button {
  public text = input<UtlOptional<string>>('Button');
  public variant = input<UtlOptional<ButtonType>>('PRIMARY');
  public isFilled = input<UtlOptional<Boolean>>(null);
}

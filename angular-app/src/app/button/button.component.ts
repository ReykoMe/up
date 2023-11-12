import { Component, Input, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  //For normal work in angular app as 'web-component' but not 'angular-component'
  // It's need to replace <ng-content></ng-content> with <slot></slot> and set
  // property encapsulation: ViewEncapsulation.ShadowDom. As angular component
  // app-button works fine

  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],

  template: `
    <button title="{{customTitleExample}}">
      <ng-content></ng-content>
    </button>
  `,

  styles: [`
    :host {
      position: relative;
      max-width: max-content;
    }
  `],
})


export class ButtonComponent {
  @Input({required: true}) customTitleExample?: string
}

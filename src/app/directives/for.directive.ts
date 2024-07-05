import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface ForContext<T> {
  $implicit: T;
  index: number;
}

@Directive({
  selector: '[for][forOf]',
})
export class ForDirective<T> {
  private items!: T[];

  @Input() set forOf(value: T[] | undefined) {
    if (value) {
      this.items = value;
      this.viewContainer.clear();
      this.items.forEach((item, index) => {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: item,
          index,
        });
      });
    }
  }

  constructor(
    private templateRef: TemplateRef<ForContext<T>>,
    private viewContainer: ViewContainerRef
  ) {}
}

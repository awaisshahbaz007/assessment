import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[if]'
})
export class IfDirective<T> {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set if(condition: Observable<T> | null) {
    if (condition) {
      condition.pipe(takeUntil(this.destroy$)).subscribe((value) => {
        if (value) {
          this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: value });
        } else {
          this.viewContainer.clear();
        }
      });
    } else {
      this.viewContainer.clear();
    }
  }

  private destroy$ = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Directive , Input , TemplateRef , ViewContainerRef,OnChanges } from '@angular/core';

@Directive({
  selector: '[appExeUnless]'
})
export class ExeUnlessDirective {

    @Input('appExeUnless')appExeUnless:string ;
//  ngOnChanges(changes:<any>) {
//      console.dir(changes);
//  }
    set condition(newCondition: boolean) {
    if (!newCondition) { // 创建模板对应的内嵌视图
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
     private viewContainer: ViewContainerRef) {
  }

}

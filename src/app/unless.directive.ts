import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

// name must same as selector because if not same we can call in the template,
// and in template it using property binding
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcContainer.createEmbeddedView(this.templateRef);
      // create embedded method which does just what name applies it creates
      // a view in this view container.
      // so this template we created here is exactly this reference to the template there is exactly
      // what we need.
    } else {
      this.vcContainer.clear();
      // simply call the clear method to remove everything from this place in the dom.

    }
  }
  constructor(private templateRef: TemplateRef < any > , private vcContainer: ViewContainerRef) {

  }

}

// the template can be injected by adding templateref

// get access to this template and we also need to get
// access to the place in the document where we want to render it
// both can be injected

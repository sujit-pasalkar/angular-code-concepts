import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustom1]',
})
export class Custom1Directive implements OnInit, OnChanges {
  // @Input({required: true}) condition!: boolean;
  @Input({required: true}) selectFrom!: any;

  constructor(private elementRef: ElementRef,private renderer2: Renderer2,
    private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, 
  ) {

  }

  @HostListener('mouseenter') onMouseEnter(){
    // this.elementRef.nativeElement.style.color = 'red'
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'red')
  }

  @HostListener('mouseout') onMouseEOut(){
    // this.elementRef.nativeElement.style.color = 'black'
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'white')
  }

  async ngOnInit() {
    // if (this.condition) {
    //   this.viewContainerRef.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainerRef.clear();
    // }

    // make background color change on highlight
    // this.elementRef.nativeElement()


    // angular.dev example
    const data = await this.selectFrom.load();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      // Create the embedded view with a context object that contains
      // the data via the key `$implicit`.
      $implicit: data,
    });
  
  }

  ngOnChanges(){
    // if (this.condition) {
    //   this.viewContainerRef.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainerRef.clear();
    // }
  }

}

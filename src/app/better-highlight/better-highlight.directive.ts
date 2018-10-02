import { ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { Directive, Renderer2, OnInit } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  //selector can be set such a alias for element
  //camelword because we access property on dom 
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
  }

  @HostListener('mouseenter')mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue'); //using hostlistener to listen to host event
    this.backgroundColor =this.highlightColor; //host binding to bind host properties
  }

  
  @HostListener('mouseleave')mousleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent'); //using hostlistener to listen to host event
    this.backgroundColor =this.defaultColor; //host binding to bind host properties
  }
}

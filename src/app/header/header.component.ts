import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef,  Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalAdd') modalAdd: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('habitInput') habitInput: ElementRef;
  @Output() itemNameOut = new EventEmitter<string>();
  itemName = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddButton(buttonContent){
    console.log(buttonContent)
    let view = this.modalAdd.createEmbeddedView(null);
    this.vc.insert(view);
    this.modalAdd.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
    this.modalAdd.elementRef.nativeElement.previousElementSibling.classList.add('modal-open'); 
    // this.modalAdd.elementRef.nativeElement.previousElementSibling.classList.add('modal-backdrop'); 
    this.modalAdd.elementRef.nativeElement.previousElementSibling.style.display = 'block';
    // this.backdrop = document.createElement('DIV')
    // this.backdrop.className = 'modal-backdrop';
    // this.backdrop.style = "background-color: #ffff";
    // document.body.appendChild(this.backdrop)
  }

  onCloseModal() {
    console.log('close')
    this.vc.clear()
    // document.body.removeChild(this.backdrop)
  }

  onSaveHabit() {
    this.itemNameOut.emit(this.habitInput.nativeElement.value) ;
    console.log(this.habitInput.nativeElement.value);
    this.onCloseModal();
  }
}

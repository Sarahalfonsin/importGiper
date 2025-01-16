import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // srcResult: any;
  constructor(private router: Router) {}

  redirigir() {
    this.router.navigate(['/meli']);
  }
  // onFileSelected() {
  //   const inputNode: any = document.querySelector('#file');

  //   if (typeof FileReader !== 'undefined') {
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       this.srcResult = e.target.result;
  //     };

  //     reader.readAsArrayBuffer(inputNode.files[0]);
  //   }
  // }

}

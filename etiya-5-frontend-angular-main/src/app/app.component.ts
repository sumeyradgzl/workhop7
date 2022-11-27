import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // HTML tarafındaki etiketi tanımlar
  templateUrl: './app.component.html', // Hangi HTML dosyasını kullanacağını belirtir
  styleUrls: ['./app.component.scss'], // Hangi CSS dosyasını/dosyalarını kullanacağını belirtir
})
export class AppComponent implements OnInit {
  // title: string = 'Etiya 5 Frontend Angular'; // Propoerty, State

  ngOnInit(): void {}
}

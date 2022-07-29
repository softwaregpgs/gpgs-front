import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  map: any;

  constructor() { }

  ngOnInit(): void {

    this.loadMap()
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
 
    }).addTo(this.map);

    const icon = L.icon({
      iconUrl: 'assets/images/marker-icon.png',
      shadowUrl: 'assets/images/marker-shadow.png',
      popupAnchor: [13, 0],
    });

    this.getCurrentPosition().subscribe((position: any) => {
      this.map.flyTo([position.latitude, position.longitude], 13);

      const marker = L.marker([position.latitude, position.longitude]).bindPopup(`<mat-card class="mat-elevation-z4">
      <mat-card-header>
          <mat-card-title>Empresa</mat-card-title>
      </mat-card-header>
      
      <mat-card-content>
          <p>
              Esto es una empresa
          </p>
      </mat-card-content>
      <mat-card-actions>
          <button mat-button>Ver empresa</button>
      </mat-card-actions>
  </mat-card>`);
      marker.addTo(this.map);
    });
  }

}

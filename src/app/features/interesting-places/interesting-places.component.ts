import { Component, OnInit } from '@angular/core';
import { YaReadyEvent } from 'angular8-yandex-maps';
import { InterestingPlace } from './models/interesting-place.model';
import { InterestingPlacesService } from './services/interesting-places.service';

@Component({
  selector: 'app-interesting-places',
  template: `
  <div class='content'>
    <section class ='cards-wrapper'>
      <header>
        <img src='https://devpro.blob.core.windows.net/photos/places/томск.jpg'>
        <h1>Чем заняться в Томске</h1>
        <p>
          Томск – город с богатой историей,
          и в то же время очень молодёжный.
          Томск - бывшая столица Сибири (основан в 1604 г.),
           а его деревянное зодчество славится на весь мир.
           А молодёжи на улицах города так много, потому что в Томске – 6 университетов.
           Из 700 000 населения – около 100 000 студенты из 70 стран.
           Также поговаривают, здесь самая высокая концентрация айтишников
            на один квадратный метр. Что тоже не удивительно: в городе трудятся
             больше 7 000 IT-специалистов в доброй сотне экспортирующих софтверных компаний.
             В Томске есть куда сходить и что посмотреть.
        </p>
      </header>
      <div class = 'interesting-card' *ngFor="let onePlace of interestingPlaces; let i = index" >
        <app-interesting-place-card [place]="onePlace" id={{i}}></app-interesting-place-card>
      </div>
    </section>
    <div id = 'map' class='map'>
      <ya-map [center]="[56.48, 84.96]" [zoom]="13">
        <ya-clusterer [options]="clustererOptions" *ngFor="let onePlace of interestingPlaces; let i = index">
          <ya-placemark
            [geometry]="coordinates[i]"
            [properties]="{hintContent: onePlace.name, balloonContent: onePlace.name}"
            (yamouseenter)="onMouseInter()"
            (yamouseleave)="onMouseLeave()"
            (yaclick)="onPlacemarkClick(i)"
          >
          </ya-placemark>
        </ya-clusterer>
      </ya-map>
    </div>
  </div>
    `,
  styleUrls: ['./interesting-places.component.scss']
})
export class InterestingPlacesComponent implements OnInit {
  public idConference = 1;
  public interestingPlaces: InterestingPlace[];
  public clustererOptions = {
    preset: 'islands#invertedVioletClusterIcons',
    hasBaloon: false
  };
  public coordinates = [];

  constructor(private interestingOlacesService: InterestingPlacesService) { }

  ngOnInit(): void {
    const onePlaceCoordinate = [];

    this.interestingOlacesService.getInterestingPlaces(this.idConference)
    .subscribe((interestingPlases: InterestingPlace[]) => {
      this.interestingPlaces = interestingPlases;

      this.interestingPlaces.forEach(el => {
        onePlaceCoordinate.push(el.latitude),
        onePlaceCoordinate.push(el.longitude);
        this.coordinates.push(onePlaceCoordinate);
      });

    });

  }

  /**
   * обработать событие наведения мыши на объект
   */
  public onMouseInter(): void{
    this.clustererOptions.preset = 'islands#greenIcon';
  }

  /**
   * обработать событие отведения мыши с объекта
   */
  public onMouseLeave(): void{
    this.clustererOptions.preset = 'islands#greenIcon';
    // if (event.type === 'mouseleave') {
    //   event.instance.options.unset('preset');
  }

  /**
   * обработать событие клика по объекту
   */
  public onPlacemarkClick(e: any): void {
    e.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    console.log(e);

  }
}

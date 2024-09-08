import { Component, OnInit } from '@angular/core';
import { Campeon } from 'src/app/Modals/Campeon';
import { CampeonService } from 'src/app/Services/campeon/campeon.service';

@Component({
  selector: 'app-campeones-list',
  templateUrl: './campeones-list.page.html',
  styleUrls: ['./campeones-list.page.scss'],
})
export class CampeonesListPage implements OnInit {

  campeones: Campeon[] = [];

  constructor(private _campeonService: CampeonService) { }

  ngOnInit() {
    this.cargarCampeones();
  }

  cargarCampeones() {
    this.campeones = this._campeonService.getCampeones();
  }

}
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  championList;
  version;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getVersion().subscribe(data => {
      this.version = data;
      localStorage.setItem('version', this.version.v);
      this.apiService.getChampionList(data.v).subscribe(champions => {
        this.championList = champions.data;
      });
    });
  }

}

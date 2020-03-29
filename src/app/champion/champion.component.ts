import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {
  imageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/';
  imageBaseUrlSpells = 'https://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/';
  name;
  champion;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const version = localStorage.getItem('version');
    this.name = this.route.snapshot.params.name;
    if (!version) {
      this.router.navigate(['/main']);
    }
    this.apiService.getChampionDetail(version, this.name).subscribe(champion => {
      this.champion = champion.data[this.name];
      console.log(this.champion);
    }, err => {
      this.router.navigate(['/main']);
    });


  }

}

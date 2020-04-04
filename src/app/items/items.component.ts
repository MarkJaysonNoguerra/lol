import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items;
  version;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.version = localStorage.getItem('version');
    this.apiService.getItems(this.version).subscribe(items => {
      console.log(items);
      this.items = items.data;
    }, err => {
      this.router.navigate(['/main']);
    });

  }

}

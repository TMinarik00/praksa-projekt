import { Component, OnInit } from '@angular/core';
import { ISport } from '../sports.interface';
import { SportsService } from '../sports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  sports: ISport[] = [];

  headItems = [
    { Head: 'ID', FieldName: 'sportsId' },
    { Head: 'Sport Name', FieldName: 'name' },
    { Head: 'Action', FieldName: '' },
  ];

  constructor(private sportsService: SportsService, private route: Router) {}

  ngOnInit(): void {
    this.getSports();
  }

  getSports() {
    this.sportsService.getSports().subscribe((res: any) => {
      this.sports = res;
    });
  }

  getDetails(sport: ISport) {
    this.route.navigate([`/sports/list/details/${sport.sportsId}`]);
  }

  onCreate() {
    this.route.navigate(['sports/list/create']);
  }

  deleteItem(sport: ISport) {
    this.sportsService.deleteSport(sport.sportsId).subscribe((res: any) => {
      this.sports = this.sports.filter((t) => t.sportsId !== sport.sportsId);
    });
  }
}

import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() headArr: any[] = [];
  @Input() contentArr: any[] = [];
  @Output() detailsBtn = new EventEmitter<any>();
  @Output() deleteBtn = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  getDetails(event: any) {
    this.detailsBtn.emit(event);
  }

  deleteItem(event: any) {
    this.deleteBtn.emit(event);
  }
}

import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LolService } from '../../service/lol.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  faCoffee = faCoffee;
  faStar = faStar;
  selectedSize: any  // Initialisez selectedSize
  public products: any[] = []; // Initialisez products
  sortOptions: any[] = [];

  public sortKey!: string;

  sortOrder!: number;

  sortField!: string;

  
  constructor(
    private lolService: LolService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  )

  {

  }

  ngOnInit() {
    this.getData();

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
  ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

      
  getData() {
    this.lolService.getChampionRotation().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });
  };
}

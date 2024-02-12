import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LolService } from '../../service/lol.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public productByID: any;


  constructor(
    private lolService: LolService,
    private route: ActivatedRoute,
    ) { }


  ngOnInit() {
    this.getProductById();
  }

  getProductById() {
    // Utilisez 'params' de 'ActivatedRoute' pour récupérer l'ID
    const productId = this.route.snapshot.paramMap.get('id'); // Assurez-vous que 'id' correspond au nom du paramètre défini dans vos routes
    if (productId) {
      this.lolService.getChampionById(productId).subscribe((data: any) => {
        this.productByID = data;
        console.log(data);
      });
    } else {
      console.log('Product ID not found!');
    }
  }
}

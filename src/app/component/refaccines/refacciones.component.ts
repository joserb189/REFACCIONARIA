import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CarritoService } from 'src/app/service/carrito.service';
@Component({
  selector: 'app-refacciones',
  templateUrl: './refacciones.component.html',
  styleUrls: ['./refacciones.component.css']
})
export class ProductosComponent implements OnInit {
public refaccionlist : any;
  constructor(private api : ApiService, private cartService : CarritoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos(){
    this.refaccionlist= this.api.getProducto();
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}

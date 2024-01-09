import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/services/user.service';
import { UserEntity } from 'src/Interfaces/UserEntity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  pageSize: number = 2;
  usuarios: UserEntity[] = [];
  Temporal: UserEntity[] = [];
  constructor(private service: UserService )
  {

  }

  get linkNumbers(): number[] {
    return Array(Math.ceil(this.usuarios.length / this.pageSize)).fill(0).map((x, i) => i + 1);
  }

  ngOnInit() {
    this.service.Get().subscribe(
      data => {
        this.usuarios = data.data;
        this.GetElementByPage(1);
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
    
    }

    GetElementByPage(pageNumber: number) {
      const startIndex = (pageNumber - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.Temporal = this.usuarios.slice(startIndex, endIndex);
    }
}

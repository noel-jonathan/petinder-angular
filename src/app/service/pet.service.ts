import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../models/Pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly petsUrl: string

  constructor(private http: HttpClient) {
    this.petsUrl = `${environment.backendUrl}/pets`
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl).pipe(map(pets => pets.sort((a, b) => a.name.localeCompare(b.name))));
  }
}

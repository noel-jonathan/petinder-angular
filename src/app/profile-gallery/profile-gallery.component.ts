import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Pet} from "../models/Pet";
import {PetService} from "../service/pet.service";
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from "../pipes/name-filter.pipe";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, NameFilterPipe],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})

export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = []
  selectedPet: Pet | undefined
  searchText: string = ""

  constructor(private petService: PetService) {
  }

  ngOnInit(): void {
    this.getPets()
  }

  getPets() {
    this.petService.getPets().subscribe((pets: Pet[]) => this.pets = pets)
  }

  selectPet(pet: Pet): void {
    this.selectedPet = pet
  }

}

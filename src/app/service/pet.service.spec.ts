import {TestBed} from '@angular/core/testing';

import {provideHttpClient} from "@angular/common/http";
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {Pet} from "../models/Pet";
import {PetService} from "./pet.service";
import {firstValueFrom} from "rxjs";

describe('PetService', () => {
  let service: PetService
  let httpMock: HttpTestingController;
  const result: Pet[] = [
    {id: 1, name: 'test 1', kind: 'cat', image: 'test_1.jpg', profileText: 'test', popularity: 1},
    {id: 2, name: 'test 2', kind: 'dog', image: 'test_2.jpg', profileText: 'test', popularity: 2}
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        PetService
      ]
    })
      .compileComponents()

    service = TestBed.inject(PetService)
    httpMock = TestBed.inject(HttpTestingController)

  });

  it("should make a single get request and return expected", async () => {
    const expected = firstValueFrom(service.getPets())
    const req = httpMock.expectOne('http://localhost:8080/pets');
    expect(req.request.method).toBe('GET')
    req.flush(result)

    expect(await expected).toEqual(result)

    httpMock.verify()
  });
})

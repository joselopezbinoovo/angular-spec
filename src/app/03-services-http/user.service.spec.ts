import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  let userservice: UserService;
  let HttpClientSpy: { get: jasmine.Spy}

  beforeEach(() => {
    HttpClientSpy= jasmine.createSpyObj('HttpClient', ['get']);
  
    userservice = new UserService(HttpClientSpy as any)
  });

  it('should return expected users ( HttpCleinte callled once)', () => {
    const expectedHeroues = [
      { id: 1, name : 'A'},
      { id: 2, name : 'B'}
    ]; 
    HttpClientSpy.get.and.returnValue(of(expectedHeroues));

    userservice.getUsers();

    expect(userservice.users.length).toBe(2);
    expect(HttpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it 
});

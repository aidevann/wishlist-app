import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'John' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' }
    ];
    return {items};
  }
}
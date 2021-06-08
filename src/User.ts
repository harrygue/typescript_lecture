import faker from 'faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  showError: string = 'showError'

  constructor(){
    this.name = faker.name.firstName();

    // location object must be initialized otherwise it will be undefined
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return  `<div>
      <h2>User Name: ${this.name}</h2>
    </div>`
  }
}

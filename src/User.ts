import faker from "faker";
import { Mapabble } from "./CustomMap";

export class User implements Mapabble {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>User</h1>
        <h3>${this.name}</h3>
      </div>
    `;
  }
}

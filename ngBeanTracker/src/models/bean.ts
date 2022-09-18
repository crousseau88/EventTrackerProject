export class Bean {
  id: number;
  name: string;
  brand: string;
  type: string;
  process: string;
  growingRegion: string;
  growingAltitude: string;
  blendBase: string;
  roastLevel: string;
  buyAgain: boolean;
  rating: number;

constructor(
  id: number = 0,
  name: string = '',
  brand: string = '',
  type: string = '',
  process: string = '',
  growingRegion: string = '',
  growingAltitude: string = '',
  blendBase: string = '',
  roastLevel: string = '',
  buyAgain: boolean = false,
  rating: number = 0
)

{
  this.id = id;
  this.name = name;
  this.brand = brand;
  this.type = type;
  this.process = process;
  this.growingRegion = growingRegion;
  this.growingAltitude = growingAltitude;
  this.blendBase = blendBase;
  this.roastLevel = roastLevel;
  this.buyAgain = buyAgain;
  this.rating = rating;
}

}

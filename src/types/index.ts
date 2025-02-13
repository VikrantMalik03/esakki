export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Booking {
  arrivalDate: Date;
  departureDate: Date;
  numberOfMembers: number;
  name: string;
  mobile: string;
}
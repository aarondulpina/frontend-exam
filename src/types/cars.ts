export type listingData = {
  car: car;
  seller: seller;
  sellingPrice: number;
  mileage: number;
  description: string;
  images: string[];
  color: string;
};

export type car = {
  make: string;
  model: string;
  year: string;
  serialPrice: number;
};

export type seller = {
  fullName: string;
  address: string;
  contact: string;
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: IUserAddress;
  website: string;
  company: IUserCompany;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserGeo;
}

export interface IUserGeo {
  lat: string;
  lng: string;
}


export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

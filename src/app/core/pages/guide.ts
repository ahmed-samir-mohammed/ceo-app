export interface CeoList {
  id: number;
  image: string;
  company: string;
  createdDate: string;
  cvDescription: string;
  cvNote: string;
  imageUrl: string;
  linkedIn: string;
  name: string;
  twitter: string;
  position: string;
}

export interface AddNewCeo {
  imageUrl: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  cvDescription: string;
  cvUrl: string;
}

export interface UpdateCeo {
  imageUrl: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  cvDescription: string;
  cvUrl: string;
  ceoId: number;
}

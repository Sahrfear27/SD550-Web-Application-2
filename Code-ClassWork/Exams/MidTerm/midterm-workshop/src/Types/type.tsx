export interface Author {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  address: string;
}

// export interface Book {
//   id: string;
//   title: string;
//   genre: string;
//   isbn: string;
//   format: string;
//   summary: string;
//   authors?: string[];
// }

export interface Catalog {
  numberOfCopies: number;
  availableCopies: number;
}
export interface Book {
  id: string;
  title: string;
  genre: string;
  isbn: string;
  format: string;
  summary: string;
  authors?: string[];
  publisher: number;
  catalog: Catalog;
}

export interface AddAuthorType {
  authors: string[] | undefined;
  id: string;
  title: string;
  genre: string;
  isbn: string;
  format: string;
  summary: string;
}

export interface Publiser {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

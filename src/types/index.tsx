export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

interface BrandingColors {
  primary: string;
}

interface Agency {
  brandingColors: BrandingColors;
  logo: string;
}

export interface Results {
  price: string;
  id: string;
  mainImage: string;
  agency: Agency;
}

export type LoadingType = boolean;

export interface Loading {
  saved: LoadingType,
  results: LoadingType,
}

export type Errors = string;

export interface NewStoreState {
  results: Results[],
  saved: Results[],
  errors: Errors,
  loading: Loading,
}
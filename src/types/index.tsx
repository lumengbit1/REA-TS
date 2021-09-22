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

interface Results {
  price: string;
  id: string;
  mainImage: string;
  agency: Agency;
}

interface Loading {
  saved: boolean,
  results: boolean,
}

export interface NewStoreState {
  results: Results[],
  saved: Results[],
  errors: string,
  loading: Loading,
}
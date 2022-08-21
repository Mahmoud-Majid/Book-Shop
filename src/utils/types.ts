export interface ProductProp {
  id: number;
  title: string[];
  subjects: string[];
  authors: Author[];
  translators: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
}

interface Format {
  'image/jpeg': string;
}

interface Author {
  name: string;
  birth_year: string | null;
  death_year: string | null;
}

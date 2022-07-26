export interface StrapiReturn<Attr> {
  data: StrapiData<Attr>[] | StrapiData<Attr>;
}
export interface StrapiData<Attr> {
  id: number;
  attributes: Attr;
}

export interface ImageAttr {
  formats: ImageFormats;
  caption: string;
}
interface ImageFormats {
  large: FormatData;
  medium: FormatData;
  small: FormatData;
  thumbnail: FormatData;
}
interface FormatData {
  url: string;
  width: number;
  height: number;
}

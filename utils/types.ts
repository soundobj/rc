export type Image = {
  height: number,
  url: string,
  width: number,
};

export type Name = {
  name: string;
}

interface PagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export type Album = {
  artists: Name[],
  images: Image[],
  name: string,
  release_date: string,
}

export type SeachAlbumResponse = PagingObject<Album>;

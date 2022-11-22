export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type GitHub = {
  stars: number;
};

export type GithubRepo = {
  stars: number;
  forks: number;
  url: string;
  description: string;
};

export type NotionReadingItem = {
  id: string;
  data: {
    name: string;
    author: string;
    status: string;
    start_date: string;
    end_date: string;
  };
};

export type NotionDatabase = {
  scheme: string;
  items: NotionReadingItem[];
};

export type TopTracks = {
  tracks: Song[];
};

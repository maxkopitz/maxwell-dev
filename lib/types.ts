export type Track = {
  songUrl: string;
  artist: string;
  title: string;
  ranking: number;
};
export type NavProps = {
  href: string;
  text: string;
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
  forks: number;
};

export type GithubRepo = {
  id: string;
  name: string;
  stars: number;
  forks: number;
  url: string;
  description: string;
};

export type GithubRepoList = {
  repositories: GithubRepo[];
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

export type TopSongs = {
  tracks: Track[];
};

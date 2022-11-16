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
}

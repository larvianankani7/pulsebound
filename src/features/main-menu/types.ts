export interface NavigationItem {
  id: string;
  name: string;
  path: string;
  translationKey: string;
}

export interface MusicPlayerState {
  isMuted: boolean;
  isPlaying: boolean;
  volume: number; // 0 to 100
  playbackRate: number;
  actualRate: number;
}

import { ApplePodcastIcon } from "./icons/apple-podcast";
import { SpotifyIcon } from "./icons/spotify";
import { YoutubeIcon } from "./icons/youtube";

export function PodcastActions({ title }: { title: string }) {
  return (
    <div className="mt-14">
      <span className="text-sm text-gray">{title}</span>
      <div className="flex justify-center mt-4">
        <a
          href="https://open.spotify.com/show/2zBigmg9LYzR7jtfBiWMqt"
          target="_blank"
          rel="noreferrer"
        >
          <SpotifyIcon />
        </a>
        <a
          href="https://www.youtube.com/@yirmibirbitcoin9805"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon className="ml-4" />
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/yirmibir-bitcoin-podcasti/id1566075345"
          target="_blank"
          rel="noreferrer"
        >
          <ApplePodcastIcon className="ml-4" />
        </a>
      </div>
    </div>
  );
}

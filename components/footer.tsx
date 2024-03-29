import Link from "next/link";
import { urls } from "../utils/urls";
import { TwitterIcon } from "./icons/twitter";
import { SpotifyIcon } from "./icons/spotify";
import { TelegramIcon } from "./icons/telegram";
import { YoutubeIcon } from "./icons/youtube";

export function Footer() {
  return (
    <footer className="px-10 pb-14 md:px-10 pt-11 bg-dark border border-dark border-t-lightDark/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-center md:flex-row">
        <ul className="flex items-center justify-between lg:justify-start">
          <li className="h-min">
            <Link href="https://youtube.com/">
              <a href={urls.twitter} target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter Logo</span>
                <TwitterIcon />
              </a>
            </Link>
          </li>
          <li className="block ml-3 lg:ml-6 h-min">
            <Link href="https://youtube.com/">
              <a href={urls.youtube} target="_blank" rel="noreferrer">
                <span className="sr-only">Youtube Logo</span>
                <YoutubeIcon />
              </a>
            </Link>
          </li>
          <li className="ml-3 lg:ml-6 h-min">
            <a href={urls.spotify} target="_blank" rel="noreferrer">
              <span className="sr-only">Spotify Logo</span>
              <SpotifyIcon />
            </a>
          </li>
          <li className="ml-3 lg:ml-6 h-min">
            <a href={urls.telegram} target="_blank" rel="noreferrer">
              <span className="sr-only">Telegram Logo</span>
              <TelegramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

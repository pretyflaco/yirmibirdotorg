import { FlagType } from "../components/flag";
import events from "../content/events.json";
import { ArticleSlug } from "./routes";

export type EventType = typeof events[number];

export type Frontmatter = {
  index: number;
  author: string;
  authorURL: string;
  tags: string[];
  title: string;
  meta: string;
  translator: string;
  translatorURL: string;
  translator2?: string;
  translatorURL2?: string;
  img: string;
  flag: FlagType;
  slug: ArticleSlug;
};


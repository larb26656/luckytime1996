import { XMLParser } from "fast-xml-parser";
import type { BlogFeed } from "../types/blog";

export async function getBlogFeeds(): Promise<BlogFeed[]> {
  const res = await fetch("https://blog.luckytime1996.dev/rss.xml");
  const xmlText = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  const jsonObj = parser.parse(xmlText);
  const items = jsonObj.rss.channel.item;
  console.log(items);

  return items.map((item: any) => ({
    title: item.title,
    link: item.link,
    description: item.description,
    date: item.pubDate,
    thumbnail: item.enclosure?.["@_url"],
  }));
}

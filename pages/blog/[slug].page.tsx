import Image from "next/image";
import { LinkedinIcon } from "../../components/icons/linkedin";
import { TwitterIcon } from "../../components/icons/twitter";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { images } from "../../utils/images";
import { useRouter } from "next/router";
import { Frontmatter } from "../../utils/types";
import { BlogSection } from "../../components/blog-section";
import copy from "copy-to-clipboard";
import styles from "../../styles/blog.module.scss";
import { Flag } from "../../components/flag";
import { useState } from "react";
import React from "react";
import classNames from "classnames";
import Head from "next/head";
import YouTubeVideo from '../../components/youtubevideo';

function getTwitterShareURL(title: string, slug: string) {
  return `https://twitter.com/intent/tweet?text=${title} https://yirmibir.org/blog/${slug}`;
}

function getLinkedinShareURL(slug: string) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=https://yirmibir.org/blog/${slug}`;
}

function CopyURLButton() {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 3500);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <button
      className="px-3 flex items-center text-sm h-[2rem] font-medium border text-gray border-gray/40 hover:border-purple/40 hover:text-purple"
      onClick={() => {
        setCopied(true);
        copy(location.href);
      }}
    >
      {copied ? "Kopyalandı 🙌" : "URL'yi Kopyala"}
    </button>
  );
}


export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const post = posts.find((post) => post.frontmatter?.slug === router.query.slug)!;

  const otherPosts = posts.filter((p) => p.frontmatter?.slug !== router.query.slug).splice(0, 3);

  const {
    title,
    author,
    translator,
    translator2,
    slug,
    authorURL,
    translatorURL,
    translatorURL2,
    flag,
    img,
  } = post?.frontmatter || {};
  
    // Hydration-specific debugging: Add console logs right before the return statement
    console.log("Post Data:", post);
    console.log("Router Slug:", router.query.slug);

  return (
    <>
      <Head>
        {/* Facebook meta tags */}
        <meta property="og:url" content={`https://yirmibir.org/blog/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.meta} />
        <meta
          property="og:image"
          content={`https://yirmibir.org${images[img as keyof typeof images]}`}
        />
        {/* Facebook meta tags */}

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="yirmibir.org" />
        <meta property="twitter:url" content={`https://yirmibir.org/blog/${slug}`} />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={post.frontmatter.meta} />
        <meta
          name="twitter:image"
          content={`https://yirmibir.org${images[img as keyof typeof images]}`}
        />
        {/* Twitter meta tags */}
      </Head>

      <main className="pb-20 bg-dark">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            {img && (
              <>
                <div className="w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[img as keyof typeof images]}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full blur-sm brightness-[20%]"
                  />
                </div>
                <div className="h-[400px] sm:h-[600px] flex justify-center brightness-[30%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={images[img as keyof typeof images]} alt="" className="h-full" />
                </div>
              </>
            )}
            {!img && (
              <Image
                src={images.magicInternetMoney}
                width={1440}
                height={600}
                layout="responsive"
                unoptimized
                alt=""
                priority
              />
            )}

<div className="absolute z-5 text-center w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-[1.75rem] md:text-4xl xl:text-5xl">{title}</h1>
              <p className="mt-2 text-sm md:text-lg">
                Yazar{" "}
                <a className="text-purple" href={authorURL}>
                  {author}
                </a>
                , Tercüme{" "}
                <a className="mr-1 text-purple" href={translatorURL}>
                  {translator}
                </a>
                {translator2 && (
                  <>
                    ,{" "}
                    <a className="mr-1 text-purple" href={translatorURL2}>
                      {translator2}
                    </a>
                  </>
                )}
                <Flag country={flag} />
              </p>
            </div>
          </div>


          <div className="relative mx-6 mt-16 text-xl tracking-wide md:w-auto sm:mx-10 prose md:mx-20 md:text-21 text-gray leading-8 md:leading-9 first-letter:text-3xl first-letter:tracking-wide">
            {post?.content && (
              <div
                dangerouslySetInnerHTML={{ __html: md().render(post.content) }}
                suppressHydrationWarning
                className={classNames(styles.markdown, "prose mx-auto")}
              />
            )}
            <div className="flex justify-end mt-14">
              {" "}
              <CopyURLButton />
              <a
                href={getTwitterShareURL(title, slug)}
                className="border ml-2.5 border-gray/40 h-[2rem] w-[2rem] flex items-center justify-center hover:border-purple/40 group"
              >
                <TwitterIcon className="text-gray group-hover:text-purple" />
              </a>
              <a
                href={getLinkedinShareURL(slug)}
                className="h-[2rem] ml-2.5 w-[2rem] flex items-center justify-center border border-gray/40 hover:border-purple/40 group"
              >
                <LinkedinIcon className="text-gray group-hover:text-purple" />
              </a>
            </div>
          </div>

          <div className="flex justify-center mx-10 md:mx-16">
            <BlogSection title="Diğer Makaleler" posts={otherPosts} />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync("content/posts");
  return {
    paths: posts.map((t) => ({ params: { slug: t.replace(".md", "") } })),
    fallback: false,
  };
};

export async function getStaticProps() {
  const posts = fs.readdirSync("content/posts").map((fileName: string) => {
    const readFile = fs.readFileSync(`content/posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      content,
      frontmatter: frontmatter as Frontmatter,
    };
  });

  return {
    props: { posts },
  };
}

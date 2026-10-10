import fs from "fs";
import md from "markdown-it";
import Head from "next/head";
import classNames from "classnames";
import { InferGetStaticPropsType } from "next";
import styles from "../styles/blog.module.scss";

export default function Privacy({ html }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası | Yirmibir</title>
        <meta name="description" content="Yirmibir gizlilik politikası / privacy policy" />
      </Head>
      <main className="pb-20 bg-dark">
        <div className="mx-auto max-w-7xl">
          <div className="relative mx-6 pt-16 text-lg tracking-wide sm:mx-10 md:mx-20 text-gray leading-8">
            <article
              dangerouslySetInnerHTML={{ __html: html }}
              className={classNames(styles.markdown, "prose mx-auto")}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const content = fs.readFileSync("content/privacy.md", "utf-8");
  return { props: { html: md({ linkify: true }).render(content) } };
}

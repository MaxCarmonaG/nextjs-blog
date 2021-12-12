import type { NextPage } from "next";
import Head from "next/head";
import FeaturedPost from "../components/HomePage/FeaturedPost";
import Hero from "../components/HomePage/Hero";
import { getFeaturedPosts } from "../helper/postUtils";

interface Props {
  posts: {
    slug: string;
    title: any;
    date: any;
    image: any;
    excerpt: any;
    isFeatured: any;
    content: string;
  }[];
}

const HomePage: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Max Blog</title>
      <meta
        name="description"
        content="I post about programming and web development"
      />
    </Head>
    <Hero />
    <FeaturedPost posts={posts} />
  </>
);

export const getStaticProps = () => ({
  props: {
    posts: getFeaturedPosts(),
  },
});

export default HomePage;

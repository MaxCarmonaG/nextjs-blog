import { NextPage } from "next";
import Head from "next/head";
import AllPosts from "../../components/HomePage/Posts/AllPosts";
import { getAllPost } from "../../helper/postUtils";
import { Post } from "../../types";

interface Props {
  posts: Post[];
}

const AllPostPage: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>All Posts</title>
      <meta
        name="description"
        content="A list of all programming-related tutorials and posts!"
      />
    </Head>
    <AllPosts posts={posts} />
  </>
);

export const getStaticProps = () => ({
  props: {
    posts: getAllPost(),
  },
});

export default AllPostPage;

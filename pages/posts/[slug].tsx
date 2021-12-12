import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PostContent from "../../components/HomePage/Posts/PostContent";
import { getPostData, getPostFiles } from "../../helper/postUtils";
import { Post } from "../../types";

interface Props {
  post: Post;
}

const PostDetailPage: NextPage<Props> = ({ post }) => (
  <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <PostContent {...post} />
  </>
);

export const getStaticProps: GetStaticProps = (context) => {
  const paramsValue = context.params?.slug;
  const slug = paramsValue && !Array.isArray(paramsValue) && paramsValue;

  return {
    props: {
      post: getPostData(slug ? slug : ""),
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: getPostFiles().map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, "") },
  })),
  fallback: false,
});

export default PostDetailPage;

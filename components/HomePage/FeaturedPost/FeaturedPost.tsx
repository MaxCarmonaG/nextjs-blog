import { FC } from "react";
import { Post } from "../../../types";
import PostsGrid from "../Posts/PostsGrid";
import styles from "./FeaturedPost.module.css";

interface Props {
  posts: Post[];
}

const FeaturedPost: FC<Props> = ({ posts }) => (
  <section className={styles.latest}>
    <h2>Featured Post</h2>
    <PostsGrid posts={posts} />
  </section>
);

export default FeaturedPost;

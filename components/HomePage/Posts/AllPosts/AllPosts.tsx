import { FC } from "react";
import { Post } from "../../../../types";
import PostsGrid from "../PostsGrid";
import styles from "./AllPosts.module.css";

interface Props {
  posts: Post[];
}

const AllPosts: FC<Props> = ({ posts }) => (
  <section className={styles.posts}>
    <PostsGrid posts={posts} />
  </section>
);

export default AllPosts;

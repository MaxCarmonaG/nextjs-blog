import React, { FC } from "react";
import { Post } from "../../../../types";
import PostItem from "../PostItem/PostItem";
import styles from "./PostsGrid.module.css";

interface Props {
  posts: Post[];
}

const PostsGrid: FC<Props> = ({ posts }) => (
  <ul className={styles.grid}>
    {posts.map((post) => (
      <PostItem key={post.slug} post={post} />
    ))}
  </ul>
);

export default PostsGrid;

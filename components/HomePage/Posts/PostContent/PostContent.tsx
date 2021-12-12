import Image from "next/image";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "../PostHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./PostContent.module.css";
import { Post } from "../../../../types";

const PostContent: FC<Post> = ({ slug, title, image, content }) => {
  const imagePath = `/images/posts/${slug}/${image}`;
  const transformToImage = {
    img: ({ ...props }) => (
      <Image
        src={`/images/posts/${slug}/${props.src}`}
        alt={props.alt}
        width={600}
        height={300}
      />
    ),
    code: ({ ...props }) => {
      return (
        <SyntaxHighlighter
          language={props.className.replace("language-", "")}
          style={atomDark}
        >
          {props.children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={transformToImage}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;

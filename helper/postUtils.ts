import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    slug: postSlug,
    title: data.title,
    date: data.date,
    image: data.image,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    content,
  };
};

export const getAllPost = () => {
  const postsFiles = getPostFiles();

  return postsFiles
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA > postB ? -1 : 1));
};

export const getFeaturedPosts = () =>
  getAllPost().filter((post) => post.isFeatured);

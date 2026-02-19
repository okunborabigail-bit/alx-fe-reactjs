import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is a dynamically generated blog post page.</p>
    </div>
  );
};

export default BlogPost;

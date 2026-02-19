import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // ALX expects these options
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60,     // 1 minute
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  if (isLoading) return <h2>Loading posts...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

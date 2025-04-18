import BlogPost from "../../ui/BlogPost/blogPost";

type BodyProps = {
  posts: {
    title: string;
    description: string;
    date: string;
    like: boolean;
  }[];
  onLike: (index: number) => void;
};

export default function index({ posts, onLike }: BodyProps) {
  return (
    <div className="bg-stone-950 h-screen px-96 justify-items-center pt-4">
      {posts.map((post, index) => (
        <BlogPost 
          key={index}
          title={post.title}
          description={post.description}
          like={post.like}
          date={post.date}
          onClick={() => onLike(index)}
        />
      ))}
    </div>
  )
}

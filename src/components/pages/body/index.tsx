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
    <div className="bg-stone-950 flex-grow px-24 justify-items-center pt-4 lg:px-60 md:px-48 sm:px-40">
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

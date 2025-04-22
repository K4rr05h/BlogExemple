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
    <div className="bg-stone-950 flex-grow px-10 justify-items-center pt-4 lg:px-44 md:px-32 sm:px-20">
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

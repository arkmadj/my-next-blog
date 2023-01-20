import { Post } from "typings";
import Image from "next/image";

type Props = {
	posts: Post[];
};

const BlogList = ({ posts }: Props) => {
	return (
    <div>
      <hr className="border-[#772CE8] mb-10" />
      <div>
        {posts.map(post => (
          <div key={post_id}>
            <div>
              <Image/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

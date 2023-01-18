import { Post } from "typings";

type Props = {
	posts: Post[];
};

const BlogList = ({ posts }: Props) => {
	return (
    <div>
      <hr className="border-[#772CE8] mb-10" />
    </div>
  );
};

export default BlogList;

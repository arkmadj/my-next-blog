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
				{posts.map((post) => (
					<div key={post._id}>
						<div>
							<Image
								className="object-cover object-left lg:object-center"
								src={urlFor(post.mainImage).url()}
                alt={post.author.name}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;

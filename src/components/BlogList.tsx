import Image from "next/image";
import urlFor from "lib/urlFor";
import { Post } from "typings";

type Props = {
	posts: Post[];
};

const BlogList = ({ posts }: Props) => {
	return (
		<div>
			<hr className="border-[#772CE8] mb-10" />
			<div>
				{posts.map((post) => (
					<div key={post._id} className="flex flex-col cursor-pointer group">
						<div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105">
							<Image
								className="object-cover object-left lg:object-center"
								src={urlFor(post.mainImage).url()}
								alt={post.author.name}
								fill
							/>
							<div className="absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
								<div>
									<p className="font-bold">{post.title}</p>
									<p>
										{new Date(post._createdAt).toLocaleDateString("en-US", {
											day: "numeric",
											month: "long",
											year: "numeric",
										})}
									</p>
								</div>
                <div className="flex flex-col items-center md:flex-row gap-y-2 md:gap-x-2">
                  {post.categories.map((category) => (
                    <div key={category._id} className="bg-[#772CE8] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
							</div>
						</div>

            <div>
              <p>{post.title}</p>
              <p>{post.title}</p>
            </div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;

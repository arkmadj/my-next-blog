import { client } from "lib/sanity.client";
import { groq } from "next-sanity";
import { Post } from "typings";
import Image from "next/image";
import urlFor from "lib/urlFor";

type Props = {
	params: {
		slug: string;
	};
};

async function Post({ params: { slug } }: Props) {
	const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
      ...,
      author->,
      categories[]->
    }
  `;

	const post: Post = await client.fetch(query, { slug });

	return (
		<article className="px-10 pb-28">
			<section className="space-y-2 border border-[#772CE8] text-white">
				<div className="relative flex flex-col justify-between min-h-56 md:flex-row">
					<div className="absolute top-0 w-full h-full p-10 opacity-10 blur-sm">
						<Image
							className="object-cover object-center mx-auto"
							src={urlFor(post.mainImage).url()}
							alt={post.author.name}
							fill
						/>
					</div>

					<section className="p-5 bg-[#772CE8] w-full">
						<div className="flex flex-col justify-between md:flex-row gap-y-5">
							<div>
								<h1 className="text-4xl font-extrabold">{post.title}</h1>
								<p>
									{new Date(post._createdAt).toLocaleDateString("en-US", {
										day: "numeric",
										month: "long",
										year: "numeric",
									})}
								</p>
							</div>
							<div className="flex items-center space-x-2">
								<Image
									className="rounded-full"
									src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
								/>
                <div className="w-64">
                  <h3>{post.author.name}</h3>
                  <div>{/* TODO: Author BIO */}</div>
                </div>
							</div>
						</div>
					</section>
				</div>
			</section>
		</article>
	);
}

export default Post;

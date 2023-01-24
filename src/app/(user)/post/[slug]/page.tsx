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
		<article>
			<section>
				<div>
					<div>
						<Image
							className="object-cover object-center mx-auto"
							src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
						/>
					</div>
				</div>
			</section>
		</article>
	);
}

export default Post;

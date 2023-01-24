import Link from "next/link";
import Image from "next/image";
import urlFor from "lib/urlFor";

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className="w-full m-10 mx-auto relatvive h96">
					<Image
						className="object-contain"
						src={urlFor(value).url()}
						alt="Blog Post Image"
						fill
					/>
				</div>
			);
		},
	},
};

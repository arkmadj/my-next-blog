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
    list: {
      bullet: ({children}: any)=> (
        <ul className="py-5 ml-10 space-y-5 list-disc">{children}</ul>
      ),
      number: ({children}: any) => {
        <ol className="list-decimal mt-lg">{children}</ol>
      }
    }
	},
};

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
    },
    block: {
      h1: ({children}: any) => (
        <h1 className="py-10 text-5xl font-bold">{children}</h1>
      ),
      h2: ({children}: any) => (
        <h2 className="py-10 text-4xl font-bold">{children}</h2>
      ),
      h3: ({children}: any) => (
        <h3 className="py-10 text-3xl font-bold">{children}</h3>
      ),
      h4: ({children}: any) => (
        <h4 className="py-10 text-2xl font-bold">{children}</h4>
      ),
    }
	},
};

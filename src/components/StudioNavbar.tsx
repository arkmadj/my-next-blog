import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { NavbarProps } from "sanity";

const StudioNavbar = (props: NavbarProps) => {
	return (
		<div>
			<div className="flex items-center justify-between p-5">
				<Link href="/" className="text-[#772CE8] flex items-center">
          {/* <ArrowUturnLeftIcon className="h-6 w-6 text-[#772CE8] mr-2"/> */}
					Go to website
				</Link>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
};

export default StudioNavbar;

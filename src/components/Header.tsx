import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
			<div>
				<Link href="/">
					<Image
						className="rounded-full"
						height={50}
						width={50}
						src="https://resources.premierleague.com/premierleague/badges/50/t3.png"
            alt="logo"
					/>
				</Link>
        <h1>Zultan</h1>
			</div>
			<div></div>
		</header>
	);
};

export default Header;

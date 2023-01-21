import Banner from "@/components/Banner";
import Header from "@/components/Header";
import "../globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="smx-auts msadxd-w-7sexl">
				<Header />
        <Banner/>
				{children}
			</body>
		</html>
	);
}

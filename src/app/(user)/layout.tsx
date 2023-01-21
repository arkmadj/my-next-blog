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
			<body className="mx-auto madx-w-7exl">
				<Header />
        <Banner/>
				{children}
			</body>
		</html>
	);
}

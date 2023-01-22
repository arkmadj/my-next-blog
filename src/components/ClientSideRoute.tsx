import React from "react";
import Link from "next/link";

function ClientSideRoute({
	children,
	route,
}: {
	children: React.ReactNode;
	route: string;
}) {
	return <Link>{children}</Link>;
}

export default ClientSideRoute;

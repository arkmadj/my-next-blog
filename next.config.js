/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["resources.premierleague.com", "cdn.sanity.io"],
	},
};

module.exports = nextConfig;

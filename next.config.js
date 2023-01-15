/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["resources.premierleague.com"],
	},
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['placehold.co'],
		dangerouslyAllowSVG: true,
		// unoptimized: true
	},
	// distDir: 'dist',
	// output: 'export',
	// assetPrefix: './',
	// trailingSlash: true
}

module.exports = nextConfig

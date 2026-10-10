module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  basePath: "",
  images: {
    loader: "akamai",
    path: "/",
    domains: ["*.cloudfront.net/*"],
  },
  pageExtensions: ["page.tsx"],
  async redirects() {
    return [{ source: "/gizlilik", destination: "/privacy", permanent: true }];
  },
};

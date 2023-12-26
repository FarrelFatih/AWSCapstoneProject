module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/:path*", // Adjust the source pattern to match your API routes
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "process.env.NEXT_PUBLIC_API_URL",
          },
          // Add other headers if needed
        ],
      },
    ];
  },
};

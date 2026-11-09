import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.pousadaelliiyzitapedro.com.br",
          },
        ],
        destination: "https://pousadaelliiyzitapedro.com.br/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

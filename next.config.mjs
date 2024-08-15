import "dotenv/config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration here
};

console.log("UPSTASH_VECTOR_REST_URL:", process.env.UPSTASH_VECTOR_REST_URL);
console.log(
  "UPSTASH_VECTOR_REST_TOKEN:",
  process.env.UPSTASH_VECTOR_REST_TOKEN
);
console.log("QSTASH_TOKEN:", process.env.QSTASH_TOKEN);

export default nextConfig;

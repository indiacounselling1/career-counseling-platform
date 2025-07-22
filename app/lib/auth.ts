import GithubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("GitHub OAuth environment variables are not set.");
}

const authOptions = {
  providers: [
    GithubProvider({
      clientId: clientId,
      clientSecret: clientSecret
    })
  ],
  // ...any other config
};

export default authOptions;

import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/(.*)','/unidades','/vende','unidades/:slug([a-zA-Z0-9]+)'],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/'],
  apiRoutes: ['/api'],

});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
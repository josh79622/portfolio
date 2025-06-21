// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from "@sentry/nextjs";

if (process.env.NODE_ENV !== 'production') {
  // 不要初始化 Sentry
  // 直接 return，不做事
  console.log("NONONONONONON")
  module.exports = {};
} else {
  Sentry.init({
    dsn: "https://bf340aeece343530c3cbace2721d7749@o4509530744225792.ingest.us.sentry.io/4509530788986880",

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}



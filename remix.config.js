/** @type {import('@remix-run/dev').AppConfig} */
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  future: {
    unstable_postcss: true,
  }
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};

// // next.config.js
// module.exports = {
//   images: {
//     loader: "custom",
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     nextImageExportOptimizer: {
//       imageFolderPath: "public/images",
//       exportFolderPath: "out",
//       quality: 75,
//     },
//   },
//   env: {
//     storePicturesInWEBP: true,
//     generateAndUseBlurImages: true,
//   },
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   distDir: 'output',
//   trailingSlash: true,
//   assetPrefix: '.',
//   images: {
//     unoptimized: true,
//   },
// }

//  module.exports = nextConfig;

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'export',
 
//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,
 
//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,
 
//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// }
 
// module.exports = nextConfig

module.exports = {
    images: {
      domains: ['petsafekennels.com']
    },
    env: {
      NEXT_PUBLIC_publickey: process.env.NEXT_PUBLIC_publickey,
      NEXT_PUBLIC_userid: process.env.NEXT_PUBLIC_userid,
      NEXT_PUBLIC_templateid: process.env.NEXT_PUBLIC_templateid
    }
  }

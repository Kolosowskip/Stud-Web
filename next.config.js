// next.config.js

const withSass = require("@zeit/next-sass");
module.exports = withSass({
    async redirects(){
        return [
            {
                source: '/index',
                destination: '/explore',
                permanent: true,
            }
        ]
    }
});

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/index',
//         destination: '/explore',
//         permanent: true,
//       },
//     ]
//   },
// }
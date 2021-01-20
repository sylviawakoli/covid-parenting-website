import { ScullyConfig } from '@scullyio/scully';

import * as fs from "fs";
const langCodes = fs.readdirSync("./tip_sheets")
  .filter((filename) => filename.length < 5);

console.log("Lang codes", langCodes);

const langRoutes = {};

langCodes.forEach((code) => {
  langRoutes["/tips/" + code] = {
    type: "default"
  };
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "covid-parenting-website",
  // pluginDir: './scully/plugins/',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    }
  },
  extraRoutes: langCodes.map((code) => "/tips/" + code)
};

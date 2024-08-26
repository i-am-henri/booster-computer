import { pageTree } from '@/app/source';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { Home } from "lucide-react";
import Github from "./icons/github";
import XformerlyTwitter from "./icons/x";

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "Booster Docs"
  },
  links: [
    {
      text: 'GitHub',
      icon: <Github />,
      url: 'https://github.com/i-am-henri/booster-computer',
    },
    {
      text: 'Twitter',
      icon: <XformerlyTwitter />,
      url: "https://twitter.com/boosterdotcomputer",
    },
    {
      text: "Booster",
      icon: <Home />,
      url: 'https://booster.computer',
    }
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};

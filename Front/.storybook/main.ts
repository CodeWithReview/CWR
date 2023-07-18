import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const storyConfig: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  async viteFinal(baseConfig, { configType }) {
    return mergeConfig(baseConfig, {
      // manually specify plugins to avoid conflict
      plugins: []
    });
  },

  docs: {
    autodocs: "tag"
  }
};
export default storyConfig;

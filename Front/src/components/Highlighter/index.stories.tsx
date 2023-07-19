import type { Meta, StoryObj } from "@storybook/react";
import Highlighter from ".";

const defaultSnippet = `
import type { Meta, StoryObj } from "@storybook/react";
import Highlighter from ".";

const meta = {
  title: "Input Component",
  component: Highlighter,
  tags: ["autodocs"]
  args:{
    code: defaultSnippet,
    language: 'tsx',

  }
} satisfies Meta<typeof Highlighter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;

const meta = {
  title: "Highlighter Component",
  component: Highlighter,
  tags: ["autodocs"],
  args: {
    code: defaultSnippet,
    language: "tsx"
  }
} satisfies Meta<typeof Highlighter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

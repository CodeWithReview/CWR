import type { Meta, StoryObj } from "@storybook/react";
import PrismEditor from ".";

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
  title: "PrismEditor Component",
  component: PrismEditor,
  tags: ["autodocs"],
  args: {
    defaultCode: defaultSnippet,
    language: "tsx"
  }
} satisfies Meta<typeof PrismEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

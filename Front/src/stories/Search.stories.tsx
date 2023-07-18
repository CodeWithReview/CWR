import type { Meta, StoryObj } from "@storybook/react";
import Search from "@/components/Search";

const meta = {
  title: "Search",
  component: Search,
  tags: ["autodocs"]
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

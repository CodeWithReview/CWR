import type { Meta, StoryObj } from "@storybook/react";
import SelectMenu from "@/components/SelectMenu";
import { skill } from "@/components/FormSelectMenu/data";

const meta = {
  title: "SelectMenu Component",
  component: SelectMenu,
  argTypes: {
    position: {
      options: ["right", "center", "left"],
      control: { type: "radio" }
    }
  },

  tags: ["autodocs"]
} satisfies Meta<typeof SelectMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => <SelectMenu {...args} />,
  args: {
    position: "center",
    defaultValue: { value: "Python", label: "Python" },
    id: "select-skill",
    options: skill
  }
};

import OAuth from "@/components/OAuth";
import { ReduxProvider } from "@/context";
import type { Meta, StoryObj } from "@storybook/react";

const ReduxOAuth = () => {
  return (
    <ReduxProvider>
      <OAuth authorize="google" />
    </ReduxProvider>
  );
};

const meta = {
  title: "OAuth Button Component",
  component: ReduxOAuth,
  tags: ["autodocs"],
  argTypes: {
    authorize: {
      option: "google"
    }
  }
} satisfies Meta<typeof ReduxOAuth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

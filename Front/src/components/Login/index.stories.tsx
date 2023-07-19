import type { Meta, StoryObj } from "@storybook/react";
import { ReduxProvider } from "@/context";
import Login from ".";

const WrapperLogin = () => (
  <ReduxProvider>
    <Login />
  </ReduxProvider>
);

const meta = {
  title: "Login Component",
  component: WrapperLogin,
  tags: ["autodocs"]
} satisfies Meta<typeof WrapperLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

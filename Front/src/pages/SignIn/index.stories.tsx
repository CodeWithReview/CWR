import type { Meta, StoryObj } from "@storybook/react";
import { ReduxProvider } from "@/context";
import Header from "@/components/Header";
import Content from "@/components/Content";
import SignIn from ".";

const WrapperSignIn = () => {
  return (
    <ReduxProvider>
      <Header />
      <Content>
        <SignIn />
      </Content>
    </ReduxProvider>
  );
};

const meta = {
  title: "SignIn Page With Header",
  component: WrapperSignIn,
  tags: ["autodocs"]
} satisfies Meta<typeof WrapperSignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

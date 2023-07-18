import type { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/Header";
import SignUp from "@/pages/SignUp";
import Content from "@/components/Content";

const StorySignUpPage = () => (
  <>
    <Header />
    <Content>
      <SignUp />
    </Content>
  </>
);

const meta = {
  title: "SignUp Page with Header",
  component: StorySignUpPage,
  tags: ["autodocs"]
} satisfies Meta<typeof StorySignUpPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

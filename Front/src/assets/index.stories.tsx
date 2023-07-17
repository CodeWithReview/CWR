import type { Meta, StoryObj } from "@storybook/react";
import { WebSiteLogo, GoogleLogo, GithubLogo } from "./index";

const Logo = () => (
  <div className="flex flex-col">
    <div className="flex flex-row gap-2">
      <WebSiteLogo width="24px" height="24px" color="black" />
      <GoogleLogo width="24px" height="24px" color="black" />
      <GithubLogo width="24px" height="24px" color="black" />
    </div>
  </div>
);

const meta = {
  title: "Asset List",
  tags: ["autodocs"],
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

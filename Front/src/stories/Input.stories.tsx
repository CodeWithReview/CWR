import type { Meta, StoryObj } from "@storybook/react";
import FormInput from "@/components/FormInput";
import Form from "@/components/Form";
import { useForm } from "@/hooks";
import { RegisterSchema, schema } from "@/components/Register/validate";

const FormWithInput = () => {
  const form = useForm<RegisterSchema>({ schema });
  return (
    <Form form={form} onSubmit={(values) => console.log(values)}>
      <FormInput id="userId" type="text" displayName="ID" />
    </Form>
  );
};
const meta = {
  title: "Input Component",
  component: FormWithInput,
  tags: ["autodocs"],
} satisfies Meta<typeof FormWithInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import Highlighter from "@/components/Highlighter";
import Editor from "react-simple-code-editor";
import { useState } from "react";

type Props = {
  defaultCode?: string;
  language: string;
};

const PrismEditor = ({ defaultCode = "", language }: Props) => {
  const [code, setCode] = useState(defaultCode);
  const onValueChange = (code: string) => {
    setCode(code);
  };
  return (
    <Editor
      value={code}
      onValueChange={onValueChange}
      highlight={(code) => <Highlighter code={code} language={language} />}
      padding={10}
      style={{}}
    />
  );
};

export default PrismEditor;

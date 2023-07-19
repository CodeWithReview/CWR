import { Highlight, themes } from "prism-react-renderer";

type Props = {
  code: string;
  language: string;
};

const Highlighter = ({ code, language }: Props) => {
  return (
    <Highlight theme={themes.vsLight} code={code} language={language}>
      {({ style, tokens, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Highlighter;

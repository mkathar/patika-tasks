import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownConverter = () => {
  const [markdown, setMarkdown] = useState("");

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown">
      <textarea
        className="markdown__text"
        value={markdown}
        onChange={handleInputChange}
        placeholder="Markdown metni girin..."
        rows={10}
        cols={80}
      />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownConverter;

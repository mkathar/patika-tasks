import React from "react";

function ListItem({ value }) {
  const copyTextHandler = (emoji) => {
    console.log(`panda ${emoji}`);
    navigator.clipboard.writeText(emoji);
  };

  const unsecuredCopyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.append(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  const copyToClipboard = (content) => {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(content);
    } else {
      unsecuredCopyToClipboard(content);
    }
  };

  const buttonPress = (emoji) => {
    copyToClipboard(emoji);
    console.log("Clipboard updated 📥\nNow try pasting!");
  };
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3) + "...";
  }

  return (
    <div className="bg-orange-100 p-4 rounded m-2 overflow-hidden max-h-[72px]">
      <div className="flex flex-row justify-between items-center">
        <div className="text-3xl">{value.symbol}</div>
        <div>
          <h3 className="overflow-hidden max-h-[40px]">
            {truncateText(value.title, 20)}
          </h3>
        </div>
        <button
          onClick={() => buttonPress(value.symbol)}
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-violet-500 active:from-fuchsia-700  active:to-fuchsia-700 transition-all duration-300 ease-in-out active:bg-violet-700 text-white p-2 rounded"
        >
          Click to copy emoji
        </button>
      </div>
    </div>
  );
}

export default ListItem;

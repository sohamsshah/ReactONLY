import Card from "./Card";
import "./paircards.css";

export function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}

export default function PairCards({
  primaryColor,
  secondaryColor,
  headingFont,
  paragraphFont,
  importURL
}) {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      className="main-container"
    >
      <Card
        color={primaryColor}
        backgroundColor={secondaryColor}
        headingFont={headingFont}
        paragraphFont={paragraphFont}
        importURL={importURL}
      />

      <div>
        <img
          onClick={() => copyToClipboard(primaryColor)}
          src="https://img.icons8.com/dusk/64/ffffff/copy.png"
          style={{
            cursor: "pointer",
            height: "30px",
            margin: "1.2rem",
            backgroundColor: `${primaryColor}`,
            borderRadius: "50%",
            padding: "10px"
          }}
          alt="copy"
        />
        <img
          onClick={() => copyToClipboard(secondaryColor)}
          src="https://img.icons8.com/dusk/64/ffffff/copy.png"
          style={{
            height: "30px",
            margin: "1.2rem",
            backgroundColor: `${secondaryColor}`,
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer"
          }}
          alt="copy"
        />
      </div>
      <Card
        color={secondaryColor}
        backgroundColor={primaryColor}
        headingFont={headingFont}
        paragraphFont={paragraphFont}
        importURL={importURL}
      />
    </div>
  );
}

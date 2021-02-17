import React from "react";
import { copyToClipboard } from "./PairCards";

export default function Card({
  color,
  backgroundColor,
  headingFont,
  paragraphFont,
  importURL
}) {
  function generateCSS(type) {
    let css;
    if (type === "heading") {
      css = `${importURL}
      .h1{
        fontFamily:${headingFont}
      }
      `;
    }
    copyToClipboard(css);
  }
  return (
    <div
      style={{
        textAlign: "left",
        margin: "4rem",
        padding: "1.2rem",
        border: `fade 1px ${color}`,
        boxShadow: "5px 5px 0px 0px rgba(0, 0, 255, .2)",
        borderRadius: "0.5rem",
        backgroundColor: `${backgroundColor}`,
        color: `${color}`
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1 style={{ marginRight: "0.4rem", fontFamiy: `${headingFont}` }}>
          {" "}
          Nice Headline Here
        </h1>
        <img
          onClick={() => generateCSS("heading")}
          src="https://img.icons8.com/officexs/16/ffffff/copy-2.png"
          style={{ width: "20px" }}
          alt="copy"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <p style={{ fontFamiy: `${paragraphFont}` }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <img
          onClick={() => copyToClipboard("test")}
          src="https://img.icons8.com/officexs/16/ffffff/copy-2.png"
          style={{ width: "20px" }}
          alt="copy"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h5 style={{ fontFamiy: `${paragraphFont}` }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting...
        </h5>
        <img
          onClick={() => copyToClipboard("test")}
          src="https://img.icons8.com/officexs/16/ffffff/copy-2.png"
          style={{ width: "20px", color: "white" }}
          alt="copy"
        />
      </div>
    </div>
  );
}

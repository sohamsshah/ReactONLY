import React from "react";

export default function Card({
  color,
  backgroundColor,
  headingFont,
  paragraphFont
}) {
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
        <h1 style={{ marginRight: "0.4rem" }}> Nice Headline Here</h1>
        <span>button</span>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h5>
        Lorem Ipsum is simply dummy text of the printing and typesetting...
      </h5>
    </div>
  );
}

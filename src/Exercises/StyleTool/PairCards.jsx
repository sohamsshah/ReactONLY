import Card from "./Card";

export default function PairCards({
  primaryColor,
  secondaryColor,
  headingFont,
  paragraphFont
}) {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
      className="main-container"
    >
      <Card color={primaryColor} backgroundColor={secondaryColor} />
      <div>
        <button style={{ height: "10%", marginBottom: "1rem" }}>copy</button>
        <button style={{ height: "10%" }}>copy</button>
      </div>
      <Card color={secondaryColor} backgroundColor={primaryColor} />
    </div>
  );
}

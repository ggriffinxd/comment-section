export default function Input({ label, typeInput, value, useState }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        margin: "10px 0",
      }}
    >
      <label htmlFor={label}>{label}</label>
      {typeInput === "text" ? (
        <input
          id={label}
          style={{ padding: "10px" }}
          value={value}
          onChange={(ev) => useState(ev.target.value)}
        />
      ) : (
        <textarea
          style={{ width: "100%", height: "8rem" }}
          value={value}
          onChange={(ev) => useState(ev.target.value)}
        />
      )}
    </div>
  );
}

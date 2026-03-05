// ── Componente Uno ──────────────────────────────────────────────
const ComponenteUno = () => (
  <aside
    style={{
      width: 220,
      minHeight: "100vh",
      background: "#eef0f3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      borderRight: "1px solid #d8dce3",
    }}
  >
    <span
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.12em",
        color: "#3d6eb5",
        textTransform: "uppercase",
      }}
    >
      Componente Uno
    </span>
  </aside>
);

export default ComponenteUno;
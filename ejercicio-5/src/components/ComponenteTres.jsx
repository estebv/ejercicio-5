// ── Componente Tres (tarjeta) ───────────────────────────────────
const ComponenteTres = ({ titulo = "Título" }) => (
  <div
    style={{
      background: "#fff",
      border: "1px solid #d0d5de",
      borderRadius: 14,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      flex: "1 1 0",
      minWidth: 0,
      transition: "box-shadow 0.2s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow = "0 6px 24px rgba(61,110,181,0.13)")
    }
    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
  >
    {/* imagen / placeholder */}
    <div
      style={{
        background: "linear-gradient(135deg, #c9ced8 0%, #dde0e7 100%)",
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.1em",
          color: "#5a6376",
          textTransform: "uppercase",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        Componente
        <br />
        Tres
      </span>
    </div>

    {/* footer */}
    <div
      style={{
        padding: "12px 16px",
        borderTop: "1px solid #e8eaef",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: "#3d3d4d",
          fontWeight: 500,
        }}
      >
        {titulo}
      </span>
    </div>
  </div>
);

export default ComponenteTres;
import ComponenteUno from './components/ComponenteUno'
import ComponenteDos from './components/ComponenteDos'
import ComponenteTres from './components/ComponenteTres'

import './App.css'

// ── Layout principal ────────────────────────────────────────────
export default function Layout() {
  return (
    <>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');`}</style>

      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "#e8eaee",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Sidebar */}
        <ComponenteUno />

        {/* Contenido principal */}
        <main
          style={{
            flex: 1,
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Fila superior */}
          <ComponenteDos />

          {/* Fila de tarjetas */}
          <div style={{ display: "flex", gap: 20 }}>
            <ComponenteTres titulo="Título" />
            <ComponenteTres titulo="Título" />
            <ComponenteTres titulo="Título" />
          </div>
        </main>
      </div>
    </>
  );
}

import ComponenteUno from './components/ComponenteUno'
import ComponenteDos from './components/ComponenteDos'
import ComponenteTres from './components/ComponenteTres'

// ── Layout principal ────────────────────────────────────────────
export default function Layout() {
  return (
    <>
      <div className="layout">
        <ComponenteUno />

        {/* Contenido principal */}
        <main className="main-content">
          {/* Fila superior */}
          <ComponenteDos />

          {/* Fila de tarjetas */}
          <div className="cards-row">
            <ComponenteTres titulo="Título" />
            <ComponenteTres titulo="Título" />
            <ComponenteTres titulo="Título" />
          </div>
        </main>
      </div>
    </>
  );
}

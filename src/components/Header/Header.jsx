import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <a className="marca" href="#inicio" aria-label="Taskflow, início">
        <span className="marca-icone" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 6.5h2.5M5 12h2.5M5 17.5h2.5M11 6.5h8M11 12h8M11 17.5h8" />
            <path d="m5 6.5.8.8 1.7-1.8M5 12l.8.8 1.7-1.8M5 17.5l.8.8 1.7-1.8" />
          </svg>
        </span>
        <span>task<span className="marca-destaque">flow</span></span>
      </a>

      <nav className="navegacao" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#tarefas">Minhas tarefas</a>
      </nav>
    </header>
  )
}

export default Header

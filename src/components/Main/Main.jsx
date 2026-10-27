import ListaTarefas from '../ListaTarefas'
import './Main.css'

function Main({
  texto,
  setTexto,
  adicionarTarefa,
  tarefas,
  alternarConcluida,
  excluirTarefa,
}) {
  return (
    <main className="conteudo-principal">
      <section className="apresentacao" id="inicio" aria-labelledby="titulo-principal">
        <span className="etiqueta-status">
          <span className="status-ponto" aria-hidden="true" />
          SEU ESPAÇO DE PRODUTIVIDADE
        </span>
        <h1 id="titulo-principal">
          Ideias em ação.
          <br />
          <span>Um passo de cada vez.</span>
        </h1>
        <p>Organize sua rotina, acompanhe seu progresso e mantenha o foco no que importa.</p>
      </section>

      <section className="painel-tarefas" aria-label="Gerenciar tarefas">
        <form className="formulario" onSubmit={adicionarTarefa}>
          <label htmlFor="campo-tarefa">O que você quer realizar?</label>
          <div className="linha-formulario">
            <input
              id="campo-tarefa"
              type="text"
              value={texto}
              onChange={(evento) => setTexto(evento.target.value)}
              placeholder="Ex.: estudar matemática"
              autoComplete="off"
              required
            />
            <button type="submit">
              <span aria-hidden="true">+</span>
              Adicionar
            </button>
          </div>
        </form>

        <ListaTarefas
          tarefas={tarefas}
          alternarConcluida={alternarConcluida}
          excluirTarefa={excluirTarefa}
        />
      </section>
    </main>
  )
}

export default Main

function ListaTarefas({ tarefas, alternarConcluida, excluirTarefa }) {
  return (
    <section className="lista" id="tarefas" aria-labelledby="titulo-tarefas" aria-live="polite">
      <div className="lista-cabecalho">
        <div>
          <span className="rotulo-secao">SEU PAINEL</span>
          <h2 id="titulo-tarefas">Suas tarefas</h2>
        </div>
        <span className="contador-tarefas">
          {tarefas.length} {tarefas.length === 1 ? 'tarefa' : 'tarefas'}
        </span>
      </div>
      {tarefas.length === 0 ? (
        <p className="vazia">Sua lista está pronta para começar. Adicione uma tarefa acima.</p>
      ) : (
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className={tarefa.concluida ? 'item concluida' : 'item'}>
              <label>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => alternarConcluida(tarefa.id)}
                />
                <span>{tarefa.texto}</span>
              </label>
              <button
                type="button"
                className="excluir"
                onClick={() => excluirTarefa(tarefa.id)}
                aria-label={`Excluir tarefa: ${tarefa.texto}`}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaTarefas

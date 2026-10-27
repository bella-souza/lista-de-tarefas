function ListaTarefas({ tarefas, alternarConcluida, excluirTarefa }) {
  return (
    <section className="lista" aria-live="polite">
      <h2>Tarefas</h2>
      {tarefas.length === 0 ? (
        <p className="vazia">Nenhuma tarefa na lista. Digite uma atividade e clique em Adicionar.</p>
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

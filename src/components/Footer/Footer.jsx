import './Footer.css'

function Footer({ totalTarefas, tarefasConcluidas }) {
  return (
    <footer className="site-footer">
      <p>Pequenos passos constroem grandes resultados.</p>
      <p className="resumo-tarefas">
        {tarefasConcluidas} de {totalTarefas}{' '}
        {totalTarefas === 1 ? 'tarefa concluída' : 'tarefas concluídas'}
      </p>
    </footer>
  )
}

export default Footer

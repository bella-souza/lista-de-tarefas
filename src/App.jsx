import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [texto, setTexto] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(evento) {
    evento.preventDefault()

    const novaTarefa = texto.trim()
    if (novaTarefa === '') {
      return
    }

    setTarefas([
      ...tarefas,
      {
        id: Date.now(),
        texto: novaTarefa,
        concluida: false,
      },
    ])
    setTexto('')
  }

  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    )
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <div className="app">
      <Header />
      <Main
        texto={texto}
        setTexto={setTexto}
        adicionarTarefa={adicionarTarefa}
        tarefas={tarefas}
        alternarConcluida={alternarConcluida}
        excluirTarefa={excluirTarefa}
      />
      <Footer
        totalTarefas={tarefas.length}
        tarefasConcluidas={tarefas.filter((tarefa) => tarefa.concluida).length}
      />
    </div>
  )
}

export default App

import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <main>
      <Container>
        <p>Funciona hehehe</p>
        <ul>
          <li>
            {tarefas.map((t) => (
              <li key={t.titulo}>
                <Tarefa
                  descricao={t.descricao}
                  titulo={t.titulo}
                  status={t.status}
                  prioridade={t.prioridade}
                />
              </li>
            ))}
          </li>
        </ul>
      </Container>
    </main>
  )
}

export default ListaDeTarefas

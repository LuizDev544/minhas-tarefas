import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <main>
      <Container>
        <p>Funciona hehehe</p>
        <ul>
          <li>
            {itens.map((t) => (
              <li key={t.titulo}>
                <Tarefa
                  id={t.id}
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

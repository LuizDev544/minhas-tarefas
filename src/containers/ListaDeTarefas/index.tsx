import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => {
  return (
    <main>
      <Container>
        <p>Funciona hehehe</p>
        <ul>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
        </ul>
      </Container>
    </main>
  )
}

export default ListaDeTarefas

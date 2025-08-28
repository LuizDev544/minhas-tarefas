import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta',
    descricao: 'Baixar Fatura do Gmil',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => {
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

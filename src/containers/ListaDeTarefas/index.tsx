import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )
  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const exiberResultadoFiltrage = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas encontradas como: todas`
    } else {
      mensagem = `${quantidade} tarefas encontradas como: "${`{criterio} = ${valor}`} ${
        termo !== undefined && termo.length > 0 ? ` "${termo}"` : ''
      }"`
    }
  }
  const tarefas = filtraTarefas()
  return (
    <main>
      <Container>
        <p>
          {tarefas.length} Tarefas marcadas como: &quot;{' '}
          {`${criterio}=${valor}`} &ldquo; e &quot;
          {termo} &ldquo;
          {termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''}
        </p>
        <ul>
          <li>{termo}</li>
          <li>{criterio}</li>
          <li>{valor}</li>
        </ul>
        <ul>
          <li>
            {filtraTarefas().map((t) => (
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

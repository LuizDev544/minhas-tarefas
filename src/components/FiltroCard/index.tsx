import { useDispatch } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

export type Props = {
  ativo: boolean
  contador: number
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ ativo, contador, legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const filtar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }
  return (
    <S.Card ativo={ativo} onClick={filtar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard

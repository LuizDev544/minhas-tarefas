import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={1} ativo={false} />
          <FiltroCard legenda="concluidas" contador={2} ativo={false} />
          <FiltroCard legenda="urgentes" contador={3} ativo={false} />
          <FiltroCard legenda="importantes" contador={4} ativo={false} />
          <FiltroCard legenda="normal" contador={5} ativo={false} />
          <FiltroCard legenda="todas" contador={10} ativo={true} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral

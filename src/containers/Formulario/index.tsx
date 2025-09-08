import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form>
        <Campo type="text" placeholder="Titulo" />
        <Campo as="textarea" placeholder="Descrição da tarefa" />
        <Opcoes>
          <p>Prioridade</p>
          <input name="prioridade" type="radio" id="urgente" />
          <label htmlFor="urgente">Urgente</label>
          <input name="prioridade" type="radio" id="importante" />
          <label htmlFor="importante">Importante</label>
          <input name="prioridade" type="radio" id="normal" />
          <label htmlFor="normal">Normal</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

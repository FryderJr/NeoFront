import React, { useState } from 'react'
import { Button, Input, Modal, Message } from 'semantic-ui-react'
import { login } from '../../api'
import { setToken, setUser } from '../../reducers'
import { useDispatch, useSelector } from 'react-redux'

function Auth() {

  const token = useSelector(state => { console.log(state); return state.auth.token })
  const user = useSelector(state => state.auth.user)

  console.log(token)
  console.log(user)

  const dispatch = useDispatch()

  const [open, setOpen] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const sendCredentials = async () => {

    try {
      const data = {
        username,
        password
      }
      const response = await login(username, password)
      const newToken = response.auth_token
      console.log(newToken)
      dispatch(setToken(newToken))
      dispatch(setUser(data))
      setError('')
      setOpen(false)
    } catch (e) {
      console.log(e)
      setError('Не удалось авторизоваться. Проверьте правильность введённых данных или попробуйте позднее')
      return
    }
  }

  return (
    <Modal
      basic
      dimmer='blurring'
      size='mini'
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>NEO</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Input
            fluid
            placeholder='Логин'
            size='large'
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <br />
          <br />
          <Input
            fluid
            size='large'
            placeholder='Пароль'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </Modal.Description>
        {
          error && <Message error><p>{error}</p></Message>
        }
      </Modal.Content>
      <Modal.Actions>
        <Button
          style={{ width: '100%', marginLeft: 0 }}
          content="Войти"
          onClick={() => {
            sendCredentials()
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Auth
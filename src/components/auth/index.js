import React, { useState } from 'react'
import { Button, Input, Modal } from 'semantic-ui-react'
import * as jwt from 'jsonwebtoken'
import { setToken, setUser } from '../../reducers'
import { useDispatch, useSelector } from 'react-redux'

function Auth() {

  const token = useSelector(state => { console.log(state); return state.token })
  const user = useSelector(state => state.user)

  console.log(token)
  console.log(user)

  const dispatch = useDispatch()

  const [open, setOpen] = useState(true)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendCredentials = async () => {

    try {
      const data = {
        login,
        password
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(`${process.env.REACT_APP_CORE}login`, requestOptions)
      const newToken = await response.text()
      console.log(newToken)
      dispatch(setToken(newToken))
      const decoded = jwt.decode(newToken, process.env.REACT_APP_TOKEN_KEY)
      dispatch(setUser({
        id: decoded.id,
        name: decoded.name,
        department_id: decoded.department_id,
        role_id: decoded.role_id
      }))
      console.log(decoded)
    } catch (e) {
      return
    }

    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'x-access-token': token
        }
      }

      const response = fetch(`${process.env.REACT_APP_CORE}verify`, requestOptions)
      console.log(response)
    } catch (e) {

    } finally {
      setOpen(false)
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
              setLogin(e.target.value)
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
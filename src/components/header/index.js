import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowAuth, setToken } from '../../reducers'
import { Menu, Container, Button, Image } from 'semantic-ui-react'
import './index.css'

const Header = () => {

  const token = useSelector(state => { console.log(state); return state.auth.token })
  console.log(token)

  const dispatch = useDispatch()

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  const showAuth = () => {
    dispatch(setShowAuth(true))
  }

  return (
    <Menu size='massive' borderless className='header-menu'>
      <Container className='header-container'>
        <Image size='tiny' src='Group.svg' />
        <Menu.Menu position="right">
          {
            token ?
              [
                <Menu.Item className='header-option'>ЛК Учителя</Menu.Item>,
                <Menu.Item className='header-option'><Button color='red' content='Выйти' onClick={() => { dispatch(setToken('')) }} /></Menu.Item>
              ] :
              [
                <Menu.Item className='header-option' onClick={() => { jump('feature') }} as='a'>Особенности</Menu.Item>,
                <Menu.Item className='header-option' onClick={() => { jump('advantage') }} as='a'>Преимущества</Menu.Item>,
                <Menu.Item className='header-option' onClick={() => { jump('signup') }} as='a'>Связаться с нами</Menu.Item>,
                <Menu.Item className='header-option' as='a' onClick={() => { showAuth() }}>ЛК Учителя</Menu.Item>
              ]
          }
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Header
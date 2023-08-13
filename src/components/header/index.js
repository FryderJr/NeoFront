import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

const Header = () => {
  return (
    <Menu fluid inverted color="blue">
      <Container>
        <Menu.Item header>NEO</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>ЛК Учителя</Menu.Item>
          <Menu.Item><Button color='red' content='Выйти'/></Menu.Item>
          {/* Добавьте нужные кнопки меню здесь */}
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Header
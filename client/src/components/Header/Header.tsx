import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header: FC = () => {
    return (
        <>
            <Menu stackable>
                <Menu.Item>
                    <img alt="logo" src='https://react.semantic-ui.com/logo.png' />
                </Menu.Item>

                <Menu.Item>
                    <Link to='/'>Главная</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to='/payment'>Оплата</Link>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default Header

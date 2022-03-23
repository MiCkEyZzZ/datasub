import React, { FC } from 'react'
import {
    Divider,
    Grid,
    Header, List
} from 'semantic-ui-react'

import './Home.css'

const Home: FC = () => {
    return (
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={15}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Тестовое задание для компании Data Subsystems
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        приложение приема платежей
                    </p>
                    <List>
                        <List.Item>
                            <List.Header>Client</List.Header>
                            (ReactJS, Semantic UI React, React Hook Form, Axios)
                        </List.Item>
                        <Divider />
                        <List.Item>
                            <List.Header>Server</List.Header>
                            (Express, Feathers and MongoDB)
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Home

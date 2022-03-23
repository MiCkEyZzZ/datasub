import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
    Button,
    Form,
    Grid,
    Header,
    Icon,
    Image,
    Segment
} from 'semantic-ui-react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'

import './Payment.css'

const schema = yup.object().shape({
    cardNumber: yup
        .string()
        .required('Введите номер карты')
        .matches(/^\d{0,16}$/g, 'Введите корректные данные. 1234567891465789')
        .min(16, 'Минимальное количество 16 символов'),
    expData: yup
        .string()
        .required('Введите дату как на карте')
        .matches(/\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/, 'Введите корректную дата. MM/ГГ'),
    cvc: yup
        .string()
        .required('Введите номер cvc как на карте')
        .min(3, 'Минимальное количество 3 символа')
        .matches(/^[0-9]{3,4}$/, 'Введите цифры'),
    amount: yup
        .string()
        .required('Введите сумму')
        .matches(/^\d+(\.\d{1,2})?$/, 'Введите корректную сумму. 1, 100, 1000')
}).required()

interface IFormInputs {
    cardNumber: string
    expData: string
    cvc: string
    amount: string
}

const Payment: FC = () => {
    const { register, handleSubmit, reset, formState: {errors, isDirty, isValid} } = useForm({
        mode: 'onChange',
        defaultValues: {
            cardNumber: '',
            expData: '',
            cvc: '',
            amount: ''
        },
        resolver: yupResolver(schema)
    })

    const onSubmitForm: SubmitHandler<IFormInputs> = async (data) => {
        axios.post('http://localhost:3030/customers', data)

        reset()
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> Детали платежа
                </Header>
                <Form size='large' onSubmit={handleSubmit(onSubmitForm)}>
                    <Segment stacked>
                        <Form.Field as = 'fieldset' className="field">
                            <div className="ui input left icon">
                                <i className="cc mastercard icon"></i>
                                <input
                                    {...register('cardNumber', { required: true })}
                                    name='cardNumber'
                                    type="text"
                                    maxLength={16}
                                    placeholder='номер карты'
                                    autoComplete="off"
                                />
                            </div>
                            {errors.cardNumber && <p className='error'>{errors.cardNumber?.message}</p>}
                        </Form.Field>
                        <Form.Field as = 'fieldset' className="field">
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input
                                    {...register('expData', { required: true })}
                                    name='expData'
                                    maxLength={5}
                                    placeholder='дата окончания'
                                    autoComplete="off"
                                />
                            </div>
                            {errors.expData && <p className='error'>{errors.expData?.message}</p>}
                        </Form.Field>
                        <Form.Field as = 'fieldset' className="field">
                            <div className="ui input left icon">
                                <i className="credit card icon"></i>
                                <input
                                    {...register('cvc', { required: true })}
                                    name='cvc'
                                    maxLength={3}
                                    placeholder='cvc'
                                    autoComplete="off"
                                />
                            </div>
                            {errors.cvc && <p className='error'>{errors.cvc?.message}</p>}
                        </Form.Field>
                        <Form.Field as = 'fieldset' className="field">
                            <div className="ui input left icon">
                                <i className="rub icon"></i>
                                <input
                                    {...register('amount', { required: true })}
                                    name='amount'
                                    placeholder='сумма'
                                    autoComplete="off"
                                />
                            </div>
                            {errors.amount && <p className='error'>{errors.amount?.message}</p>}
                        </Form.Field>
                        <Button
                            color='teal'
                            fluid size='large'
                            type='submit'
                            disabled={!isDirty || !isValid}
                        >Оплатить
                        </Button>
                    </Segment>
                </Form>

                <Grid.Row className='mt-3 pl-2 al-c txa-l d-fx fl-row'>
                    <Icon className='arr' name='angle left' size='small' color='blue' />
                    <Link to='/'>Вернуться в магазин</Link>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    )
}

export default Payment

import React, { useState } from 'react'
import { Segment, Grid, List, Form, Input } from 'semantic-ui-react'
import ReactPlayer from 'react-player/youtube'
import { callApi } from '../../api'
import './index.css'

function Landing() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    const [isConset, setIsConset] = useState(false)

    console.log(name, email, phone, comment, isConset)

    const jump = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    const sendData = () => {
        console.log('sendData')
        const text = `${email}, ${name}, ${phone}, ${comment}`
        const body = {
            text
        }
        callApi(`${process.env.REACT_APP_SERVER}/send-email/`, body)
    }

    return (
        <div>
            <Segment inverted vertical textAlign='center' style={{ minHeight: '110vh', background: 'url("Landing_1.png")', backgroundSize: 'cover' }}>
                <Grid>
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row columns='2'>
                        <Grid.Column width='1' />
                        <Grid.Column width='15' className='text-aligned-left' >
                            <span className='text-large'>NEO — инновационная платформа</span>
                            <br />
                            <br />
                            <span className='text-large'>для изучения иностранных языков</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row />
                    <Grid.Row columns='2'>
                        <Grid.Column width='1' />
                        <Grid.Column width='15' className='text-aligned-left' >
                            <List bulleted>
                                <List.Item className='text-list'>
                                    в интерактивной форме
                                </List.Item>
                                <List.Item className='text-list'>
                                    в среде виртуальной реальности
                                </List.Item>
                                <List.Item className='text-list'>
                                    с применением искусственного интеллекта
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment inverted vertical textAlign='center' className='second-image'>
                <Grid>
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row columns='2'>
                        <Grid.Column width='1' />
                        <Grid.Column width='15' className='text-aligned-left' >
                            <span className='text-huge'>О НАС</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row />
                    <Grid.Row columns='3'>
                        <Grid.Column width='1' />
                        <Grid.Column width='7' className='text-aligned-left' >
                            <span className='text-white'>В свете новейших технологий и инноваций, наша платформа уже привлекла внимание образовательного сектора.</span>
                            <br />
                            <br />
                            <br />
                            <span className='text-white'>Сегодня мы можем заявить, что более 30 общеобразовательных школ, в которых обучается в среднем по 200 учеников, выбрали нашу платформу для обучения иностранным языкам.</span>
                            <br />
                            <br />
                            <br />
                            <span className='text-white'>Это число продолжает расти каждую неделю, что подтверждает эффективность и востребованность нашего продукта.</span>
                            <br />
                            <br />
                            <br />
                            <span className='text-white'>За короткое время NEO зарекомендовал себя как надежный инструмент, способный преобразить традиционный подход к изучению иностранных языков, делая его интерактивным, захватывающим и результативным.</span>
                        </Grid.Column>
                        <Grid.Column width='8' >
                            <ReactPlayer url='https://www.youtube.com/watch?v=ownucGCXnmk' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment id='feature' inverted vertical textAlign='center' style={{ minHeight: '110vh', background: 'url("Landing_2.png")', backgroundSize: 'cover' }}>
                <Grid>
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row columns='2'>
                        <Grid.Column width='1' />
                        <Grid.Column width='15' className='text-aligned-left' >
                            <span className='text-huge-blue'>Особенности</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row columns='2'>
                        <Grid.Column width='1' />
                        <Grid.Column width='7' className='text-aligned-left' >
                            <List bulleted>
                                <List.Item className='text-list-huge'>
                                    VR среда обеспечивает полное погружение в процесс
                                </List.Item>
                                <br />
                                <List.Item className='text-list-huge'>
                                    Персональный помощник c искусственным интеллектом обеспечит индивидуальный подход к ученику
                                </List.Item>
                                <br />
                                <List.Item className='text-list-huge'>
                                    4 языковых программы (Английский, Испанский, Французский, Китайский)
                                </List.Item>
                                <br />
                                <List.Item className='text-list-huge'>
                                    Интерактивное занятие в игровой форме превратит урок в незабываемое путешествие
                                </List.Item>
                                <br />
                                <List.Item className='text-list-huge'>
                                    Сетевые технологии позволят общаться с учениками из других стран
                                </List.Item>
                                <br />
                                <List.Item className='text-list-huge'>
                                    Контроль успеваемости
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column />
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment id='advantage' inverted vertical textAlign='center' className='third-image'>
                <br />
                <br />
                <br />
                <span className='text-giant'>Преимущества</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Grid>
                    <Grid.Row columns='4'>
                        <Grid.Column width='2' />
                        <Grid.Column width='4'>
                            <div style={{ position: 'relative', textAlign: 'left' }}>
                                <div className='item-title'>
                                    <strong className='item-title-text'>
                                        Урок - Захватывающее приключение
                                    </strong>
                                </div>
                                <div className='item-body-text'>
                                    <span>
                                        Иммерсивная виртуальная среда, персонажи с искусственным интеллектом делают процесс обучения живым и увлекательным
                                    </span>
                                </div>
                                <div className='item-symbol'>
                                    1
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width='4'>
                            <div style={{ position: 'relative', textAlign: 'left' }}>
                                <div className='item-title'>
                                    <strong className='item-title-text'>
                                        100% удержание внимания на занятии
                                    </strong>
                                </div>
                                <div className='item-body-text'>
                                    <span>
                                        Игровая форма обучения и новые эмоции вовлекают в процесс и поддерживают концентрацию ученика на материале до самого конца урока
                                    </span>
                                </div>
                                <div className='item-symbol'>
                                    2
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width='4'>
                            <div style={{ position: 'relative', textAlign: 'left' }}>
                                <div className='item-title'>
                                    <strong className='item-title-text'>
                                        Индивидуальный подход к каждому
                                    </strong>
                                </div>
                                <div className='item-body-text'>
                                    <span>
                                        Виртуальный помощник с искусственным интеллектом адаптируется под каждого ученика и позволит вести диалог в индивидуальном, подходящем для ученика темпе
                                    </span>
                                </div>
                                <div className='item-symbol'>
                                    3
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width='2' />
                    </Grid.Row>
                    <Grid.Row columns='4'>
                        <Grid.Column width='2' />
                        <Grid.Column width='4'>
                            <div style={{ position: 'relative', textAlign: 'left' }}>
                                <div className='item-title'>
                                    <strong className='item-title-text'>
                                        Языковая практика каждому и сразу
                                    </strong>
                                </div>
                                <div className='item-body-text'>
                                    <span>
                                        Использование нескольких комплектов очков одновременно позволит вести языковую практику персонально каждому ученику в классе одновременно.
                                    </span>
                                </div>
                                <div className='item-symbol'>
                                    4
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width='4'>
                            <div style={{ position: 'relative', textAlign: 'left' }}>
                                <div className='item-title'>
                                    <strong className='item-title-text'>
                                        Экономия ресурсов
                                    </strong>
                                </div>
                                <div className='item-body-text'>
                                    <span>
                                        Виртуальный помощник снизит нагрузку на преподавателя.
                                        Платформа позволяет оптимизировать расходы, освободить ресурсы для того, что действительно важно - обучения учеников.
                                    </span>
                                </div>
                                <div className='item-symbol'>
                                    5
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width='4'>
                            <div style={{ position: 'relative', textAlign: 'left' }}>
                                <div className='item-title'>
                                    <strong className='item-title-text'>
                                        В ногу со временем
                                    </strong>
                                </div>
                                <div className='item-body-text'>
                                    <span>
                                        Использование передовых технологий позволяет быть более привлекательными для новых учеников и востребованных преподавателей.
                                    </span>
                                </div>
                                <div className='item-symbol'>
                                    6
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width='2' />
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment inverted vertical textAlign='center' style={{ minHeight: '110vh', background: 'url("Landing_3.png")', backgroundSize: 'cover' }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={{ position: 'relative' }}>
                    <p className='forth-text'>Испытай новые эмоции от обучения в инновационной образовательной VR платформе NEO</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <a className='forth-button' onClick={() => { jump('signup') }}>
                    Заказать презентацию
                </a>
            </Segment>
            <Segment id='signup' inverted vertical textAlign='left' className='fifth-image'>

                <Grid style={{ zIndex: '2' }}>
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row columns='2'>
                        <Grid.Column width='2' />
                        <Grid.Column width='14'>
                            <span className='fifth-text-huge'>Будущее уже наступило</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row />
                    <Grid.Row columns='4'>
                        <Grid.Column width='2' />
                        <Grid.Column width='6'>
                            <span className='fifth-text-large'>
                                Оставьте свои контактные данные, и наш специалист свяжется с вами, чтобы запланировать демонстрацию инновационной образовательной платформы NEO или ответить на определенные вопросы и предоставить более подробную информацию на платформе.
                            </span>
                        </Grid.Column>
                        <Grid.Column width='6'>
                            <Input size='large' value={name} style={{ zIndex: 2 }} fluid placeholder='Имя' onChange={(e) => { setName(e.target.value) }} />
                            <br />
                            <Input size='large' value={email} style={{ zIndex: 2 }} fluid placeholder='E-mail' onChange={(e) => { setEmail(e.target.value) }} />
                            <br />
                            <Input size='large' value={phone} style={{ zIndex: 2 }} fluid placeholder='Телефон' onChange={(e) => { setPhone(e.target.value) }} />
                            <br />
                            <Form style={{ zIndex: 2 }}>
                                <Form.TextArea value={comment} placeholder='Комментарий' onChange={(e) => { setComment(e.target.value) }}></Form.TextArea>
                                <Form.Checkbox checked={isConset} label='Я согласен с Политикой конфеденциальности' onChange={(e, data) => { setIsConset(data.checked) }} ></Form.Checkbox>
                                <button disabled={!isConset} className='fifth-send-button' onClick={sendData}>Отправить</button>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width='2' />
                    </Grid.Row>
                </Grid>
                <img className='fifth-background-image' src='Landing_4.svg' />
            </Segment>
        </div>
    );
}

export default Landing
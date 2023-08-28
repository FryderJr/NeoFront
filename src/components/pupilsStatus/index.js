import React, { useEffect } from 'react'
import { Label, Item } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { callApi } from '../../api'
import { setPupils } from '../../reducers'

const mock_pupils = [
    {
        username: 'А. А. Абрахманов',
        last_quest: {

        }
    },
    {
        username: 'А. А. Абрахманов',
        last_quest: {

        }
    },
    {
        username: 'А. А. Абрахманов',
        last_quest: {

        }
    },
    {
        username: 'А. А. Абрахманов',
        last_quest: {
            quest_id: 1,
            points: 555
        }
    }
]

const quests = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
]

function Pupils() {

    const dispatch = useDispatch()

    const token = useSelector(state => { console.log(state); return state.auth.token })
    const pupils = useSelector(state => { return state.data.pupils })

    const getPupils = async () => {
        const interval = setInterval(async () => {
            try {
                const response = await callApi(`${process.env.REACT_APP_SERVER}/teacher-student-progress`)
                console.log(response)
                if (Array.isArray(response)) {
                    dispatch(setPupils(response))
                }
            } catch (error) {
                console.log(error)
            }
        }, Number(process.env.REACT_APP_TIMER_IN_MILIS))
    }

    useEffect(() => {
        if (token) {
            getPupils()
        } else {
            dispatch(setPupils(mock_pupils))
        }
    }, [token])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div style={{ textAlign: 'left' }}>
                {/* Заголовок и содержимое второй колонки */}
                <h2>В сети</h2>
                {/* Содержимое второй колонки */}
            </div>
            <Item.Group divided style={{ marginTop: '0px !important' }}>
                {
                    pupils.map(pupil => {
                        return (
                            <Item>
                                <Item.Content>
                                    <Item.Header>{pupil.username}</Item.Header>
                                    <Item.Description>
                                        {
                                            quests.map(quest => {
                                                return (
                                                    <Label size='tiny' color={pupil.last_quest.quest_id && quest <= pupil.last_quest.quest_id ? 'green' : 'grey'}>{quest}</Label>
                                                )
                                            })
                                        }
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        )
                    })
                }
            </Item.Group>
        </div>
    );
}

export default Pupils
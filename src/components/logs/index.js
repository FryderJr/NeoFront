import React, { useEffect } from 'react'
import { List } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { callApi } from '../../api'
import { setLogs } from '../../reducers'

const mock_logs = [
    {
        username: 'А. А. Звягницев',
        action: {
            quest_id: 0,
            points: 55
        },
        created_time: '2023-08-21T23:03:52.423272Z'
    },
    {
        username: 'В. В. Сулейменов',
        action: {
            quest_id: 0,
            points: 55
        },
        created_time: '2023-08-21T23:03:52.423367Z'
    },
    {
        username: 'А. А. Иванов',
        action: {
            quest_id: 0,
            points: 55
        },
        created_time: '2023-08-21T23:03:52.423416Z'
    }
]

function Log() {

    const dispatch = useDispatch()

    const token = useSelector(state => { console.log(state); return state.auth.token })
    const logs = useSelector(state => { return state.data.logs })

    const getLogs = async () => {
        const interval = setInterval(async () => {
            try {
                const response = await callApi(`${process.env.REACT_APP_SERVER}/student-logs`)
                console.log(response)
                if (Array.isArray(response)) {
                    const new_logs = []
                    for (const iterator of response) {
                        const post = JSON.parse(iterator.response)
                        new_logs.push({
                            username: iterator.username,
                            action: {
                                quest_id: post.post.quest_id,
                                points: post.post.points
                            },
                            created_time: iterator.created_time
                        })
                    }
                    dispatch(setLogs(new_logs))
                }
            } catch (error) {
                console.log(error)
            }
        }, Number(process.env.REACT_APP_TIMER_IN_MILIS))
    }

    useEffect(() => {
        if (token) {
            getLogs()
        } else {
            dispatch(setLogs(mock_logs))
        }
    }, [token])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'left' }}>
                {/* Заголовок и содержимое второй колонки */}
                <h2>Активность</h2>
                {/* Содержимое второй колонки */}
            </div>
            <List style={{ textAlign: 'left', fontSize: 'large' }}>
                {
                    logs.map(log => {
                        return (
                            <List.Item><span style={{ fontWeight: 'bold' }}>{log.username}</span>{`: Завершён квест ${log.action.quest_id} набрав ${log.action.points} очков`}</List.Item>
                        )
                    })
                }
            </List>
        </div>
    );
}

export default Log
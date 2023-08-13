import React, { useEffect, useState } from 'react'
import { Form, Grid, Input, Button, Segment, Label, Table, Item, Header, Container } from 'semantic-ui-react'

const pupils = [
    {
        name: 'А. А. Абрахманов',
        progress: 2,
        class: 7
    },
    {
        name: 'А. А. Абрахманов',
        progress: 9,
        class: 6
    },
    {
        name: 'А. А. Абрахманов',
        progress: 7,
        class: 8
    },
    {
        name: 'А. А. Абрахманов',
        progress: 4,
        class: 9
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
                                <span style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>{`${pupil.class}  Класс`}</span>
                                <Item.Content>
                                    <Item.Header>{pupil.name}</Item.Header>
                                    <Item.Description>
                                        {
                                            quests.map(quest => {
                                                return (
                                                    <Label size='tiny' color={quest <= pupil.progress ? 'green' : 'grey'}>{quest}</Label>
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
import React from 'react'
import { Table } from 'semantic-ui-react'

function DataTable(headers, data) {

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    {headers.map(item => (
                        <Table.HeaderCell>{item.name}</Table.HeaderCell>
                    ))}
                    {/* Добавьте заголовки для столбцов */}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map((row) => (
                    <Table.Row key={item.id}>
                        {
                            Object.entries(row).map(([key, value]) => (
                                <Table.Cell key={key}>{value}</Table.Cell>
                            ))
                        }
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default DataTable
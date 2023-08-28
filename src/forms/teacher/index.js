import React from 'react'
import Pupils from '../../components/pupilsStatus'
import Log from '../../components/logs'
import { Grid, Segment } from 'semantic-ui-react'

function Teacher() {

    return (
        <Grid style={{ minHeight: 'calc(100vh - 4em)', paddingLeft: '1em', paddingRight: '1em' }} columns={2} divided>
            <Grid.Row>
                <Grid.Column width='5'>
                    <Segment basic>
                        <Pupils />
                    </Segment>
                </Grid.Column>
                <Grid.Column width='11'>
                    <Segment basic style={{ height: 'calc(100vh - 7em)', overflow: 'auto' }}>
                        <Log />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Teacher
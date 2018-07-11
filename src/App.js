import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import 'grommet/grommet.min.css';
import { Box, Columns } from 'grommet';

// import logo from './logo.svg';

import Card from './components/card';

class App extends Component {
  render() {
    return (
      <Columns>
        <Box align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'
          alignContent='center'
          direction='column'
        >
          <Card
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
          >
          <Card.Text>
            Hello World
          </Card.Text>
        </Card>
          <Card
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'>
          <Card.LineChart />
        </Card>
        </Box>
      </Columns>
    );
  }
}

export default App;

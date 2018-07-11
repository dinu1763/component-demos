import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import 'grommet/grommet.min.css';
import { Box, Columns } from 'grommet';

// import logo from './logo.svg';

import Card from './components/card';

class App extends Component {

  generateDataForLineChart() {

    return [{
      lineTitle: 'Sample Line 1',
      datapoints: [
        { x: 1, y: 3 },
        { x: 2, y: 5 },
        { x: 3, y: 15 },
        { x: 4, y: 12 }
      ]
    },
      {
        lineTitle: 'Sample Line 2',
        datapoints: [
          { x: 1, y: 10 },
          { x: 2, y: 4 },
          { x: 3, y: 2 },
          { x: 4, y: 15 }
        ]
      },
      {
        lineTitle: 'Sample Line 3',
        datapoints: [
          { x: 1, y: 7 },
          { x: 2, y: 11 },
          { x: 3, y: 9 },
          { x: 4, y: 2 }
        ]
      }];
  }
  getSteps() {
    return ['Do this', 'Or Do this', 'Doesn\'t work?, RESTART !!']
  }
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
          <Card>
            <Card.Title>
              Net App Volume Move Detected
            </Card.Title>
            <Card.Solutions steps={this.getSteps()}/>
          </Card>
          <Card
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'>
            <Card.Title>
              Receiver for Web Workaround with NPANPI Removal
            </Card.Title>
            <Card.LineChart
              xTitle="X Random"
              yTitle="Y Random"
              data={this.generateDataForLineChart()} />
            <Card.Solutions steps={this.getSteps()} />
        </Card>
        </Box>
      </Columns>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components'
import { Box } from 'grommet'
import LineChart from './charts/line-chart'

class Card extends Component {
  static Text = ({ ...props }) => (props.children ? props.children : null)
  static LineChart = ({ ...props }) => (
    <LineChart {...props} />
  )

  render() {
    const { className, children, ...props } = this.props;
    return (
      <Box className={className} {...props}>
        {
          React.Children.map(children,
            child => React.cloneElement(child, {})
          )
        }
      </Box>
    );
  }
}

export default styled(Card)`
  padding: 15px;
  border: 1px solid #efefef;
  border-bottom: 1px solid #f2f2f2;
  border-radius: 3px;
  margin: 15px;
  box-shadow: 0 2px 4px #ececec;
`;

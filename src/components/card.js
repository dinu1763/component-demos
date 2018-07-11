import React, { Component } from 'react';
import styled from 'styled-components'
import { Box, Title} from 'grommet'
import LineChart from './charts/line-chart'

const TitleBox = styled(Box)`
  border-bottom: 1px solid #f5f5f5;
  margin: 0 -25px 15px;
  padding: 0 25px 15px;
  width: 100%;
`;

const CardTitle = styled(Title)`
  font-size: 18px;
  font-weight: 500;
`;

const ResolutionBox = styled(Box)`
  margin: 60px -15px 15px;
  padding: 0 15px 15px;
  width: 100%;

  .heading{
    color : rgb(90, 196, 167);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
  }

  .resolution-steps{
    margin: 10px 0;
    padding: 0;
    list-style: none;
    li{
      margin: 0;
      padding-left: 25px;
      :before{
        content: '';
        width: 9px;
        height: 9px;
        background: #65737d;
        border-radius: 50%;
        position: absolute;
        margin-left: -20px;
        margin-top: 3px;
      }
    }
  }
`;


class Card extends Component {
  static Text = ({ ...props }) => (props.children ? props.children : 'No text')

  static Solutions = ({ steps = [], ...props }) => (
    <ResolutionBox>
      <span className="heading">
        Suggested Resolution
      </span>
      {
        props.children || (steps && steps.length) ? (
          <React.Fragment>
            {
              steps && steps.length ? (
              <ul class="resolution-steps">
                {steps.map((step, index) => (<li key={index}>{step}</li>))}
              </ul>
            )
              : null
            }
            {props.children}
          </React.Fragment>
          ) : 'No suggestions'
      }
    </ResolutionBox>
  )

  static Title = ({ status = 'NA', ...props }) => (props.children ? (
    <TitleBox direction='row' justify='between'>
      <CardTitle>{props.children}</CardTitle>
      <span className='status-indicator'>{status}</span>
      </TitleBox>
  ) : null)



  static LineChart = ({ ...props }) => (
    <LineChart width={400} height={400} {...props} />
  )

  render() {
    const { className, children, ...props } = this.props;
    return (
      <Box
        justify='start'
        align='center'
        wrap={true}
        pad='medium'
        margin='small'
        colorIndex='light-1'
        className={className} {...props}>
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
  padding: 15px 25px;
  border: 1px solid #efefef;
  border-bottom: 1px solid #f2f2f2;
  border-radius: 3px;
  margin: 15px;
  box-shadow: 0 2px 4px #ececec;
  width: 400px;
  color: #65737d;
`;

import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  DiscreteColorLegend
} from 'react-vis';
import { curveCatmullRom } from 'd3-shape';


export default ({ data, xTitle = 'X Axis', yTitle = 'Y Axis', width = 300, height= 300}) => (

  <XYPlot
    width={width}
    height={height}>
    <HorizontalGridLines />
    <VerticalGridLines />
    <XAxis title={xTitle} position="middle" />
    <YAxis title={yTitle} />
    {
      data.map((lineData,index) => (
        <LineSeries
          key={index}
          curve={'curveMonotoneX'}
          data={lineData.datapoints} />
      ))

    }
    <DiscreteColorLegend
      orientation="horizontal"
      width={300}
      items={
        data.map( item => item.lineTitle)
      }
    />
    {/* <LineSeries
      className="first-series"
      data={[
        { x: 1, y: 3 },
        { x: 2, y: 5 },
        { x: 3, y: 15 },
        { x: 4, y: 12 }
      ]} />
    <LineSeries
      className="second-series"
      data={null} />
    <LineSeries
      className="third-series"
      curve={'curveMonotoneX'}
      style={{
        strokeDasharray: '2 2'
      }}
      data={[
        { x: 1, y: 10 },
        { x: 2, y: 4 },
        { x: 3, y: 2 },
        { x: 4, y: 15 }
      ]}
      strokeDasharray="7, 3"
    />
    <LineSeries
      className="fourth-series"
      curve={curveCatmullRom.alpha(0.5)}
      data={[
        { x: 1, y: 7 },
        { x: 2, y: 11 },
        { x: 3, y: 9 },
        { x: 4, y: 2 }
      ]} /> */}
  </XYPlot>
);

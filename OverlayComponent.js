import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
} from 'react-native-svg';
import React, { Component } from 'react';

export class OverlayComponent extends Component {
  render() {
    return (
      <Svg
        height="400"
        width="400" >
        <G
          rotate="60"
          origin="180, 190"
          x="0" >
          <Circle cx="30" cy="180" r="10" fill="green" fillOpacity="0.5"/>
          <Rect
            x="30"
            y="180"
            height="10"
            width="150"
            stroke="#060"
            fill="#060"
            fillOpacity="0.5"
          />
          <Text
            x="100"
            y="200"
            stroke="#600"
            fill="#600"
            textAnchor="middle">
            Have Spleentitis
          </Text>
        </G>
        <G
          rotate="-60"
          origin="60, 190"
          x="170" >
          <Circle cx="210" cy="180" r="10" fill="green" fillOpacity="0.5"/>
          <Rect
            x="60"
            y="180"
            height="10"
            width="150"
            stroke="#060"
            fill="#060"
            fillOpacity="0.5"
          />
          <Text
            x="150"
            y="200"
            stroke="#600"
            fill="#600"
            textAnchor="middle">
            Do not have Spleentitis
          </Text>
        </G>
      </Svg>
    );
  }
};

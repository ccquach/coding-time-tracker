import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
  Tooltip,
} from 'recharts';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { withTheme } from '@material-ui/core/styles';

const renderCustomizedLabel = ({ viewBox: { cx, cy }, text }) => (
  <text
    x={cx}
    y={cy}
    fill={blueGrey[200]}
    textAnchor="middle"
    dominantBaseline="central"
    fontFamily="Roboto"
  >
    <tspan fontSize="40" fontWeight="100">
      {text}
    </tspan>
    <tspan dx={2} dy={8} fontSize="16">
      %
    </tspan>
  </text>
);

const DonutPieChart = ({
  theme: { palette, typography },
  data: { name, value, goal },
}) => {
  const pieData = [{ name, value }];
  pieData.push({
    name: 'remaining',
    value: goal - value,
  });

  const pctCompleted = Math.round((value / goal) * 100);

  const textStyles = {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={85}
          startAngle={90}
          endAngle={-270}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}-${index}`}
              fill={index === 0 ? palette.secondary.main : palette.grey[200]}
            />
          ))}
          <Label
            width={30}
            position="center"
            content={renderCustomizedLabel}
            text={pctCompleted}
          />
        </Pie>
        <Tooltip itemStyle={textStyles} />
      </PieChart>
    </ResponsiveContainer>
  );
};

DonutPieChart.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default withTheme()(DonutPieChart);

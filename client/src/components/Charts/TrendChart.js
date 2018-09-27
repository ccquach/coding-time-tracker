import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withTheme } from '@material-ui/core/styles';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from 'recharts';

import getDaysInMonth from '../../utils/getDaysInMonth';

const compileData = data => {
  const daysInMonth = getDaysInMonthArray();
  const completeData = getCompleteData(daysInMonth, data);
  return formatData(completeData);
};

const getDaysInMonthArray = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  return getDaysInMonth(currentMonth, currentYear).filter(
    day => new Date(day) <= Date.now()
  );
};

const getCompleteData = (daysInMonth, data) =>
  daysInMonth.map(
    day =>
      data.find(
        obj => moment(obj.date).format('M/DD') === moment(day).format('M/DD')
      ) || { date: day, hoursCoded: 0 }
  );

const formatData = data =>
  data.map(({ date, hoursCoded }) => ({
    date: moment(date).format('M/DD'),
    hours: hoursCoded,
  }));

const TrendChart = ({ data, theme: { palette, typography } }) => {
  const textStyles = {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={compileData(data)}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={palette.secondary.main}
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor={palette.secondary.main}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" interval={2} tick={textStyles} />
        <YAxis tick={textStyles}>
          <Label
            angle={-90}
            value="Hours"
            position="insideLeft"
            style={{ textAnchor: 'middle', ...textStyles }}
          />
        </YAxis>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip labelStyle={textStyles} itemStyle={textStyles} />
        <Area
          type="monotone"
          dataKey="hours"
          stroke={palette.secondary.main}
          fillOpacity={1}
          fill="url(#colorHours)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

TrendChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default withTheme()(TrendChart);

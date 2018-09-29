import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing.unit * 5,
    overflowX: 'auto',
  },
  table: {
    minWidth: 505,
  },
  completed: {
    color: green[500],
  },
  uncompleted: {
    color: red[500],
  },
});

const createData = (data, dailyGoal) =>
  data.map(({ _id, date, hoursCoded }) => ({
    _id,
    date,
    hoursCoded,
    variance: hoursCoded - dailyGoal,
    isCompleted: hoursCoded - dailyGoal >= 0,
  }));

const RecordsTable = ({ classes, data, dailyGoal }) => {
  const rows = createData(data, dailyGoal);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell numeric>Hours Coded</TableCell>
            <TableCell numeric>+ / -</TableCell>
            <TableCell numeric>Goal Achieved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ _id, date, hoursCoded, variance, isCompleted }) => (
            <TableRow key={_id}>
              <TableCell component="th" scope="row">
                <Moment format="MMM. DD">{date}</Moment>
              </TableCell>
              <TableCell numeric>{hoursCoded}</TableCell>
              <TableCell numeric>{variance}</TableCell>
              <TableCell numeric>
                {isCompleted ? (
                  <CheckCircleOutlineIcon className={classes.completed} />
                ) : (
                  <HighlightOffIcon className={classes.uncompleted} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

RecordsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  dailyGoal: PropTypes.number.isRequired,
};

export default withStyles(styles)(RecordsTable);

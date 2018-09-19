import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

import colors from '../../styles/colors';

const { base } = colors;

const ACTION_BUTTONS = [
  { icon: 'access_time', tooltip: 'Hours', form: 'record' },
  { icon: 'edit', tooltip: 'Journal Entry', form: 'journal' },
  { icon: 'my_location', tooltip: 'Goal', form: 'goal' },
];

export default class ActionButton extends Component {
  componentDidMount = () => {
    M.FloatingActionButton.init(document.querySelector('.fixed-action-btn'));
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  };

  renderButtons = () =>
    ACTION_BUTTONS.map(({ icon, tooltip, form }) => (
      <li key={icon}>
        <Link
          to={`/new/${form}`}
          className={`btn-floating ${
            base.primary
          } tooltipped waves-effect waves-light`}
          data-position="left"
          data-tooltip={tooltip}
        >
          <i className="material-icons">{icon}</i>
        </Link>
      </li>
    ));

  render() {
    return (
      <div className="fixed-action-btn">
        <a
          className={`btn-floating btn-large ${
            base.secondary
          } waves-effect waves-light`}
        >
          <i className="large material-icons">add</i>
        </a>
        <ul>{this.renderButtons()}</ul>
      </div>
    );
  }
}

import React, { Component } from 'react';

import css from './ProgressBarSalary.module.css';

export default class ProgressBarSalary extends Component {
  render() {
    const { valueOrange, valueRed, valueGreen } = this.props;
    return (
      <div className={css.divTotalColors}>
        <div
          style={{ width: valueOrange + '%', backgroundColor: '#e67e22' }}
        ></div>
        <div
          style={{ width: valueRed + '%', backgroundColor: '#c0392b' }}
        ></div>
        <div
          style={{ width: valueGreen + '%', backgroundColor: '#16a085' }}
        ></div>
      </div>
    );
  }
}

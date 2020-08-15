import React, { Component } from 'react';

import css from './inputReadOnly.module.css';

export default class InputReadOnly extends Component {
  render() {
    const { value, valuePercent, label, colorInput } = this.props;
    return (
      <div className={css.inputReadOnly}>
        <label>{label}</label>
        <input
          style={{ color: colorInput, fontWeight: 'bold' }}
          type="text"
          disabled
          value={`${value} ${valuePercent}`}
        />
      </div>
    );
  }
}

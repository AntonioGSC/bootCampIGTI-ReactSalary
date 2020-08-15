import React, { Component } from 'react';

import css from './inputFullSalary.module.css';

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;
    this.props.OnChangeSalary(newSalary);
    console.log(newSalary);
  };
  render() {
    const { input } = this.props;
    return (
      <div className={css.divInput}>
        <label for="salary">Salário Bruto</label>
        <input
          id="salary"
          type="number"
          value={input}
          min="1000"
          onChange={this.handleInputChange}
          step="100"
        />
      </div>
    );
  }
}

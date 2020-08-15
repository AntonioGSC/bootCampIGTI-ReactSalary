import React, { Component } from 'react';
import css from './App.css';
import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import { calculateSalaryFrom } from './helpers/salary';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import { formatNumber, formatNumberPercent } from './helpers/formatHelpers';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salary: 1000,
      calcSalary: {},
    };
  }
  componentDidMount() {
    this.handleChangeValues(this.state.salary);
  }

  handleChangeSalary = (salaryInput) => {
    this.setState({
      salary: salaryInput,
    });

    this.handleChangeValues(salaryInput);
  };

  handleChangeValues = (salaryInput) => {
    const calcSalary = calculateSalaryFrom(salaryInput);

    this.setState({
      calcSalary: calcSalary,
    });
  };

  render() {
    const { salary, calcSalary } = this.state;
    return (
      <div className="container">
        <h1>React Salário</h1>
        <InputFullSalary
          input={salary}
          OnChangeSalary={this.handleChangeSalary}
        />
        <div className="inputsReadOnly">
          <InputReadOnly
            label={'Base INSS:'}
            colorInput={'black'}
            value={formatNumber(calcSalary.baseINSS)}
            valuePercent={''}
          />
          <InputReadOnly
            label={'Desconto INSS:'}
            colorInput={' #e67e22'}
            value={formatNumber(calcSalary.discountINSS)}
            valuePercent={`(${formatNumberPercent(calcSalary.percentINSS)})`}
          />
          <InputReadOnly
            label={'Base IRPF:'}
            colorInput={'black'}
            value={formatNumber(calcSalary.baseIRPF)}
            valuePercent={''}
          />
          <InputReadOnly
            label={'Desconto IRPF:'}
            colorInput={'#c0392b'}
            value={formatNumber(calcSalary.discountIRPF)}
            valuePercent={`(${formatNumberPercent(calcSalary.percentIRPF)})`}
          />
          <InputReadOnly
            label={'Salário líquido:'}
            colorInput={'#16a085'}
            value={formatNumber(calcSalary.netSalary)}
            valuePercent={`(${formatNumberPercent(calcSalary.percentSalary)})`}
          />
        </div>
        <ProgressBarSalary
          valueOrange={calcSalary.percentINSS * 100}
          valueRed={calcSalary.percentIRPF * 100}
          valueGreen={calcSalary.percentSalary * 100}
        />
      </div>
    );
  }
}

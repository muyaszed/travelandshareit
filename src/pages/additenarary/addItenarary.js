import React from 'react';

class AddItenarary extends React.Component {
  state = {
    itenararayTitle: '',
    itenararayStart: '',
    itenararayEnd: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { itenararayTitle, itenararayStart, itenararayEnd } = this.state;
    return (
      <div>
        <h1 data-testid="iterPageTitle">Add new Itenarary</h1>

        <form>
          <input
            data-testid="iterTitle"
            type="text"
            name="itenararayTitle"
            onChange={this.handleChange}
            value={itenararayTitle}
          />
          <input
            data-testid="iterStart"
            type="date"
            name="itenararayStart"
            onChange={this.handleChange}
            value={itenararayStart}
          />
          <input
            data-testid="iterEnd"
            type="date"
            name="itenararayEnd"
            onChange={this.handleChange}
            value={itenararayEnd}
          />

        </form>
      </div>
    )
  }
}

export default AddItenarary;
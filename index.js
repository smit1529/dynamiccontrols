import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Button, ButtonType, DatePicker, TextField, Dropdown } from 'office-ui-fabric-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      controlArray: []
    };
  }

  render() {
    return (
      <div id="parentDiv">
        <Button buttonType={ButtonType.primary} onClick={this.onAddFilterClick}>Add Control</Button>

        {this.state.controlArray.map((itemVal, index) => {
          console.log(new Date(itemVal.datePicker));
          return (
            <div key={index}>
              <TextField label="Text Field" id={"TextField_" + index} placeholder="Text Field Placeholder." value={itemVal.textField} onBlur={this.textFieldHandleChange} />
              <Dropdown label="Drop Down" id={"Dropdown_" + index} options={dropDownOption} defaultSelectedKey={itemVal.dropDown} onChanged={(e) => this.dropDownHandleChange(e.key, index)} />
              <DatePicker label="Date Picker" onSelectDate={(e) => this.dateHandleChange(e, index)} value={new Date(itemVal.datePicker)} />
              <br></br>
            </div>
          );
        })}

        <Button buttonType={ButtonType.normal} onClick={this.onSubmitClick}>Show Details</Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

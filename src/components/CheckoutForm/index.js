import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

class CheckoutForm extends Component {
  render() {
    return (
      <div>
        <DatePicker defaultValue={moment("2018/11/12", dateFormat)} />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default CheckoutForm;

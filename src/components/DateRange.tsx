import React from "react";
import { DatePicker, Card, Button } from "antd";
import moment from "moment";
import axios from "axios";
import { DatePickerStyle } from "./styles";
import { FILTER_API } from "../constants";

const { RangePicker } = DatePicker;

const DateRange = () => {
  const [startDate, setStartDate] = React.useState<string>(
    new Date().toDateString()
  );
  const [endDate, setEndDate] = React.useState<string>(
    new Date().toDateString()
  );
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleDateChange = (values: any) => {
    setStartDate(moment(values[0]).format("DD/MM/YYYY"));
    setEndDate(moment(values[1]).format("DD/MM/YYYY"));
  };
  const submitDateRange = async () => {
    setLoading(true);
    const result = await axios.post(FILTER_API, { startDate, endDate });
    if (result && result.status === 200) {
      console.log("data", result.data);
      setLoading(false);
    } else {
      console.log("err", result.data);
      setLoading(false);
    }
  };
  return (
    <Card className="filterCard">
      <div className="date" style={DatePickerStyle}>
        <RangePicker onChange={handleDateChange} format="DD/MM/YY" />
        <Button
          type="primary"
          onClick={submitDateRange}
          loading={loading}
          disabled={loading}
          style={{ marginLeft: 20 }}
        >
          Filter Date
        </Button>
      </div>
    </Card>
  );
};

export default DateRange;

import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner: React.FC<ISpinnerProps> = ({ style }) => (
  <Spin indicator={antIcon} style={style} />
);

export default Spinner;

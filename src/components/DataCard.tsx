import React from "react";
import { Card, Statistic } from "antd";

import Spinner from "./Spinner";
import { CardStyle } from "./styles";

const DataCard: React.FC<IDataCardProps> = ({ name }) => {
  return (
    <Card hoverable title={name} style={CardStyle}>
      <Statistic value={112893} />
    </Card>
  );
};

export default DataCard;

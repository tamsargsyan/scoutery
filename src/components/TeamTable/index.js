import { Table } from "antd";
import { columns, data } from "../../locales/player-database";
import "./style.css";

const TeamTable = ({ setEnteredItem }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={() => setEnteredItem(true)}
    />
  );
};

export default TeamTable;

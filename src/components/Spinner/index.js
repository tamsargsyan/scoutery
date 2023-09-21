import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./style.css";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 36,
      color: "#5d5d61",
    }}
    spin
  />
);

const Spinner = ({ active }) => {
  return (
    <div className={`${active && "spinner-wrapper-active"} spinner-wrapper`}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Spinner;

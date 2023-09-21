import { Space, Table, Tag } from "antd";
import ProgressBar from "../ProgressBar";
import LOGO_1 from "../../assets/player-database-logo/1.svg";
import LOGO_2 from "../../assets/player-database-logo/2.svg";
import LOGO_3 from "../../assets/player-database-logo/3.svg";

import "./style.css";

const columns = [
  {
    title: "Player Name",
    dataIndex: "name",
    key: "name",
    render: text => <span>{text}</span>,
  },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "Logo",
    dataIndex: "logo",
    key: "logo",
    render: src => <img src={src} className='team-logo' alt='Logo' />,
  },
  {
    title: "Advanced Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Nationality",
    dataIndex: "nationality",
    key: "nationality",
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "weight",
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "Seniority",
    dataIndex: "seniority",
    key: "seniority",
  },
  {
    title: "Overall",
    dataIndex: "overall",
    key: "overall",
    render: value => <ProgressBar percent={+value} />,
  },
  {
    title: "Scoring",
    dataIndex: "scoring",
    key: "scoring",
    render: value => <ProgressBar percent={+value} />,
  },
  {
    title: "2PT",
    dataIndex: "_2PT",
    key: "_2PT",
    render: value => <ProgressBar percent={+value} />,
  },
  {
    title: "3PT",
    dataIndex: "_3PT",
    key: "_3PT",
    render: value => <ProgressBar percent={+value} />,
  },
  {
    title: "FT",
    dataIndex: "FT",
    key: "FT",
    render: value => <ProgressBar percent={+value} />,
  },
  {
    title: "PLAYM..",
    dataIndex: "playm",
    key: "playm",
    render: value => <ProgressBar percent={+value} />,
  },
  {
    title: "Stealing",
    dataIndex: "stealing",
    key: "stealing",
    render: value => <ProgressBar percent={+value} />,
  },
];
const data = [
  {
    key: "1",
    name: "BRANDIN PODZIEMSKI",
    team: "Santa Clara",
    logo: LOGO_1,
    role: "Advanced Role",
    nationality: "United States",
    weight: "92.2",
    height: "195.6",
    seniority: "2",
    overall: "99.9",
    scoring: "99.2",
    _2PT: "60.5",
    _3PT: "60.5",
    FT: "70.2",
    playm: "36.3",
    stealing: "82.2",
  },
  {
    key: "2",
    name: "KRIS MURRAY",
    team: "Iowa",
    logo: LOGO_2,
    role: "Defensive Ball Handler",
    nationality: "United States",
    weight: "70",
    height: "200.7",
    seniority: "1",
    overall: "70.3",
    scoring: "99.2",
    _2PT: "60.5",
    _3PT: "60.5",
    FT: "70.2",
    playm: "36.3",
    stealing: "82.2",
  },
  {
    key: "3",
    name: "JAIME JAQUEZ, JR.",
    team: "UCLA",
    logo: LOGO_3,
    role: "Offence Engine Guard",
    nationality: "United States",
    weight: "101.2",
    height: "203.6",
    seniority: "4",
    overall: "36.3",
    scoring: "99.2",
    _2PT: "60.5",
    _3PT: "60.5",
    FT: "70.2",
    playm: "36.3",
    stealing: "82.2",
  },
];

const TeamTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default TeamTable;

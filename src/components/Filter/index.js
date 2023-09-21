import { useState } from "react";
import PLAYER_DATABASE_BG from "../../assets/player-database-bg.svg";
import FILTER_ICON from "../../assets/filter-icon.svg";
import ARROW_ICON from "../../assets/arrow-down-icon.svg";
import QUESTION_MARK_ICON from "../../assets/question-mark.svg";
import { Dropdown, Popover } from "antd";
import "./style.css";
import { data } from "./data";

const Filter = ({ setEnteredItem }) => {
  // popover
  const [open, setOpen] = useState(false);
  const handleOpenChange = newOpen => {
    setOpen(newOpen);
  };

  // dropdown item
  const handleMenuClick = () => {
    // message.info("Click on menu item.");
    // console.log("click", e);
    setEnteredItem(true);
  };

  const [filteredValue, setFilteredValue] = useState("");
  const handleFilterValue = e => {
    setFilteredValue(e.target.value);
    setEnteredItem(true);
  };

  return (
    <div className='filter-wrapper'>
      <div className='player-database-bg'>
        <img src={PLAYER_DATABASE_BG} alt='Scouting Player Database' />
      </div>
      <div className='player-database'>
        <div className='player-database-title'>Player database</div>
      </div>
      <div className='filter-items-wrapper fl'>
        <div className='filter-title fl'>
          <img src={FILTER_ICON} alt='Filter' />
          <span>Filters</span>
        </div>
        <div className='filter-items fl'>
          {data.map((item, i) => (
            <Dropdown
              key={i}
              menu={{
                items: item.items,
                selectable: true,
                defaultSelectedKeys: [""],
                onClick: handleMenuClick,
              }}
              trigger={["click"]}>
              <button className='filter-items-btn'>
                <div className='filteritems-btn-space fl'>
                  {item.title}
                  <img src={ARROW_ICON} alt='Arrow' />
                </div>
              </button>
            </Dropdown>
          ))}
          <div className='filter-items-name-wrapper'>
            <input
              type='text'
              placeholder='Name/Catchword'
              value={filteredValue}
              onChange={handleFilterValue}
            />
          </div>
        </div>
        <div className='filter-question-wrapper'>
          <Popover
            title='Glossary'
            style={{
              width: "102px",
            }}
            trigger='click'
            open={open}
            onOpenChange={handleOpenChange}>
            <button className='filter-question-btn fl'>
              <img src={QUESTION_MARK_ICON} alt='Question Mark' />
            </button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Filter;

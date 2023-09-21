import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";

const Home = () => {
  const [enteredItem, setEnteredItem] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setEnteredItem(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [enteredItem]);

  return (
    <div className='home-wrapper'>
      <Spinner active={enteredItem} />
      <Filter setEnteredItem={setEnteredItem} />
    </div>
  );
};

export default Home;

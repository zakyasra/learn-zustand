import React from "react";
import useAppStore from "../../hooks/useAppStore";
import { shallow } from "zustand/shallow";

const Count = () => {
  // const { count, increase, decrease } = useAppStore(); // saat username terjadi perubahan count juga render ulang (ga baik)

  // cara ga render ulang tapi bakal boros waktu
  // const count = useAppStore((state) => state.count)
  // const increase = useAppStore((state) => state.increase)
  // const decrease = useAppStore((state) => state.decrease)

  // cara ga render ulang dan cepat, PAKE SHALLOW
  const [count, increase, decrease] = useAppStore(
    (state) => [state.count, state.increase, state.decrease],
    shallow
  ); // karena pakai destructuring, jadi harus pakai shallow kalo ga tetep kerender ulang
  console.log("Render count");

  return (
    <>
      <div className="">Count: {count}</div>
      <button type="button" onClick={increase}>
        +
      </button>
      <button type="button" onClick={() => decrease(count)}>
        -
      </button>
    </>
  );
};

export default Count;

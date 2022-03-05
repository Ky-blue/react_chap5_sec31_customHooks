//各Counterコンポーネントを import
import { CounterA } from "./CounterA";
import { CounterB } from "./CounterB";
import { CounterC } from "./CounterC";

import "./styles.css";

export default function APP() {
  // ここでは Appコンポーネントの戻り値をCounterA,B,Cコンポーネントとした
  return (
    <>
      <CounterA />
      <CounterB />
      <CounterC />
    </>
  );
}

// hooks.jsにある useCounterカスタムフックを import
import { useCounter } from "./hooks";

// CounterTextコンポーネントを import
import { CounterText } from "./CounterText";

export const CounterA = () => {
  // useCounter() の初期値に 0 をセット
  // useCounterフックを利用する
  const { count, countAdd, countSub, countReset } = useCounter(0);
  return (
    <div className="counterContainer">
      <h1>カウンターA</h1>

      {/* useCounterフックで定義した状態変数 count */}
      <CounterText count={count} />

      {/* useCounterフックで定義した関数 countAdd */}
      <button onClick={countAdd}>ボタン +1</button>

      {/* useCounterフックで定義した関数 countSub */}
      <button onClick={countSub}>ボタン -1</button>

      {/* useCounterフックで定義した関数 countReset */}
      <button onClick={countReset}>リセット</button>
    </div>
  );
};

import { useSelector, useDispatch } from "react-redux";
// useSelector hooks is helping us access data in the store.
// hooks => functions that provided to help.
import "./styles.css";
import { bindActionCreators } from "redux";
import { actionCreatores } from "./state/index";

export default function App() {
  const account = useSelector((state) => {
    return state.account;
  });

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreatores,
    dispatch
  ); // binding action creators

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(100)}>deposit</button>
      <button onClick={() => withdrawMoney(100)}>withdraw</button>
    </div>
  );
}

import { useSelector } from "react-redux";
import "./styles.css";

export default function TestComponent() {
  const state = useSelector((state) => {
    return state;
  });

  console.log("iman test", state);

  return (
    <div className="App">
      <h2>Hi I am the test compmpejnet</h2>
    </div>
  );
}

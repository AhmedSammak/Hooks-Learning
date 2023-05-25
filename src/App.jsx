import "./App.css";
import Providing from "./component/providerContext";
import LearnReducer from "./component/reducer/useReducer1";
import LearnReducer2 from "./component/reducer/useReducer2";
import LearnReducer3 from "./component/reducer/useReducer3";
import LearnReducer4 from "./component/reducer/useReducer4";
import ReducerfechingOne from "./component/reducer/fetchByState";
import ReducerfechingTwo from "./component/reducer/fetchByReducer";
import LearnState from "./component/state/useState";
import LearnClass from "./component/state/classCounter";
import LearnStateArray from "./component/state/stateArray";
import LearnStateObject from "./component/state/stateObject";
import LearnUseEffect from "./component/effect/useEffect";
import LearnConditionalyEffect from "./component/effect/conditionalyEffect";
import LearnCleanerEffect from "./component/effect/cleanerEffect";
import LearnFetchingData from "./component/effect/fetchingData";
import LearnUseCallBacks from "./component/callBack/useCallBacks";
import LearnUseMemo from "./component/useMemo";
function App() {
  return (
    <div className="App">
      <h1> Use State</h1>
      <h4>EX : // counter by use state in functions // </h4>
      <LearnState />
      <h4>EX : // use Array in state // </h4>
      <LearnStateArray />
      <h4>EX : // use Object in state // </h4>
      <LearnStateObject />
      <h1> Use Classes</h1>
      <h4>EX : // counter by use state in classes // </h4>
      <LearnClass />
      <h1> Use Context </h1>
      <Providing />
      <h1> Use Reducer</h1>
      <h4>First EX :</h4>
      <LearnReducer />
      <h4>Second EX : // More counters by object // </h4>
      <LearnReducer2 />
      <h4>Third EX : // More counters by using another use reducer // </h4>
      <LearnReducer3 />
      <h4>forth EX : // use reducer at globl project by useContext // </h4>
      <LearnReducer4 />
      <h4>fifth EX : // use State to fetch data // </h4>
      <ReducerfechingOne />
      <h4>fifth EX : // use Reducer to fetch data // </h4>
      <ReducerfechingTwo />
      <h1>Use Effect // </h1>
      <h4>first EX : // use effect in title counter // </h4>
      <LearnUseEffect />
      <h4>second EX : // use Conditionaly Effect // </h4>
      <LearnConditionalyEffect />
      <h4>third EX : // use cleaner in Effect // </h4>
      <LearnCleanerEffect />
      <h4>forth EX : // fetching data with use effect // </h4>
      <LearnFetchingData />
      <h1>Use Callbacks // </h1>
      <LearnUseCallBacks />
      <h1>Use Memo // </h1>
      <LearnUseMemo />
    </div>
  );
}

export default App;

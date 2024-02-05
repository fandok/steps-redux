import { useDispatch, useSelector } from "react-redux";

import styles from "./App.module.css";
import { updateSteps } from "./redux/actions/steps";

const STEPS_LIST = [
  {
    stepNumber: 1,
    text: "Pilih Metode",
  },
  {
    stepNumber: 2,
    text: "Bayar",
  },
  {
    stepNumber: 3,
    text: "Tiket",
  },
];

const Step = ({ stepNumber, text }) => {
  const dispatch = useDispatch();

  const step = useSelector((state) => state.steps.step);

  const handleClick = () => {
    dispatch(updateSteps(stepNumber));
  };

  return (
    <div
      className={styles.step}
      onClick={() => {
        handleClick(stepNumber);
      }}
    >
      <span
        className={
          step >= stepNumber ? styles.stepNumber : styles.stepNumberPlain
        }
      >
        {step > stepNumber ? "✓" : stepNumber}
      </span>
      <span className={styles.stepText}>{text}</span>
    </div>
  );
};

const App = () => {
  const step = useSelector((state) => state.steps.step);
  return (
    <>
      <div>step dari redux: {step}</div>
      <div className={styles.steps}>
        {STEPS_LIST.map(({ stepNumber, text }) => (
          <Step key={text} stepNumber={stepNumber} text={text} />
        ))}
      </div>
    </>
  );
};

export default App;

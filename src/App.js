import { React, useState } from "react";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Notification from "./Components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handleFeedback = (e) => {
    const name = e.target.dataset.action;

    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={handleFeedback}
      />
      <div>
        <h2>Statistics</h2>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </Section>
  );
}

export default App;

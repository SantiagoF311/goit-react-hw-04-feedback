import React, { useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100) || 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <h3>No feedback given</h3>
        )}
      </Section>
    </div>
  );
};

export default App;

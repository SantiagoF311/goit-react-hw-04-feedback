import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = (feedbackName) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackName]: prevFeedback[feedbackName] + 1
    }));
  };

  const feedBackOptions = ["good", "neutral", "bad"];
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <h1>Please leave feedback</h1>
      {feedBackOptions.map((option) => (
        <button key={option} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
    </>
  );
};

export default Feedback;

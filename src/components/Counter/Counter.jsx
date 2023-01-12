import PropTypes from "prop-types";
import { useState } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

export const Counter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleCounter = option => {

    switch (option) {
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
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleCounter}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

Counter.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  handleCounter: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};

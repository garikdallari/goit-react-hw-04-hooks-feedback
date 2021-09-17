import React from "react";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((feedback) => (
        <button
          key={feedback}
          type="button"
          data-action={feedback}
          onClick={onLeaveFeedback}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;

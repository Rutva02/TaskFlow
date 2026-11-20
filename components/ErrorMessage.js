
export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <div className="error-icon" aria-hidden="true">
        ⚠️
      </div>

      <h3>Something went wrong</h3>

      <p>
        {message || "We couldn't load your tasks. Please try again."}
      </p>

      <button
        type="button"
        className="retry-button"
        onClick={onRetry}
      >
        Try Again
      </button>
    </div>
  );
}

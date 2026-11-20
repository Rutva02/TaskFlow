
export default function EmptyState({ message, onClear }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden="true">
        📭
      </div>

      <h3>No Tasks Found</h3>

      <p>
        {message || "There are no tasks to display right now."}
      </p>

      {onClear && (
        <button
          type="button"
          className="empty-state-button"
          onClick={onClear}
        >
          Clear Search and Filters
        </button>
      )}
    </div>
  );
}

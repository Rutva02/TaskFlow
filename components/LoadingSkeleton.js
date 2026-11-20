
export default function LoadingSkeleton({ count = 3 }) {
  return (
    <div className="loading-skeleton-list" aria-label="Loading tasks" role="status">
      <span className="sr-only">Loading tasks...</span>

      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-content">
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line skeleton-description"></div>
            <div className="skeleton-line skeleton-status"></div>
          </div>

          <div className="skeleton-actions">
            <div className="skeleton-button"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-list-item" key={task.id}>
          <div className="task-details">
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <div className="task-meta">
              <span className={`status ${task.status.toLowerCase()}`}>
                {task.status}
              </span>

              <span className="task-priority">
                Priority: {task.priority}
              </span>
            </div>
          </div>

          <div className="task-actions">
            <button type="button" onClick={() => onEdit(task)}>
              Edit
            </button>

            <button
              type="button"
              className="delete-task-button"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

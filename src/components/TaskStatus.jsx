const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="task-status-panel">
      <div className="task-status-header">
        <h2 className="task-status-title">
          <span className="task-status-icon">🗂️</span>
          Task Status
        </h2>
        <span className="task-count-badge">{tasks.length}</span>
      </div>

      {tasks.length === 0 ? (
        <div className="task-empty">
          <div className="task-empty-icon">📋</div>
          <p>No active tasks</p>
          <span>Click a ticket card to assign it here</span>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <div className="task-item-info">
                <span className="task-item-id">{task.id}</span>
                <p className="task-item-title">{task.title}</p>
                <span className="task-item-customer">👤 {task.customer}</span>
              </div>
              <button
                className="btn-complete"
                onClick={() => onComplete(task)}
              >
                ✓ Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;

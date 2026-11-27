import { useEffect, useState } from "react";
import { getTasks } from "../services/TaskService";
import type { Task } from "../types/Tasks";

function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadTasks() {
      setLoading(true);
      setError("");

      try {
        const loadedTasks = await getTasks();

        if (!cancelled) {
          setTasks(loadedTasks);
        }
      } catch {
        if (!cancelled) {
          setError("We could not load your tasks. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTasks();

    return () => {
      cancelled = true;
    };
  }, [retryCount]);

  function retryLoading() {
    setRetryCount(retryCount + 1);
  }

  return (
    <section>
      <h1>My tasks</h1>

      {loading && <p role="status">Loading tasks...</p>}

      {!loading && error && (
        <div>
          <p role="alert">{error}</p>

          <button className="button" onClick={retryLoading}>
            Try again
          </button>
        </div>
      )}

      {!loading && !error && tasks.length === 0 && (
        <p>No tasks yet.</p>
      )}

      {!loading && !error && tasks.length > 0 && (
        <>
          <p>{tasks.length} tasks in your list.</p>

          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id}>
                <article className="task-card">
                  <h2>{task.title}</h2>
                  <p>{task.description}</p>

                  <dl className="task-information">
                    <div>
                      <dt>Due date</dt>
                      <dd>{task.dueDate}</dd>
                    </div>

                    <div>
                      <dt>Priority</dt>
                      <dd>{task.priority}</dd>
                    </div>

                    <div>
                      <dt>Status</dt>
                      <dd>{task.status}</dd>
                    </div>
                  </dl>
                </article>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default TaskListPage;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import { getTaskById } from "../services/TaskService";
import type { Task } from "../types/Tasks";

function TaskDetailsPage() {
  const { id } = useParams();

  const [task, setTask] = useState<Task | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadTask() {
      setLoading(true);
      setError("");
      setTask(undefined);

      try {
        const taskId = Number(id);

        if (!Number.isInteger(taskId) || taskId < 1) {
          return;
        }

        const loadedTask = await getTaskById(taskId);

        if (!cancelled) {
          setTask(loadedTask);
        }
      } catch {
        if (!cancelled) {
          setError("We could not load this task. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTask();

    return () => {
      cancelled = true;
    };
  }, [id, retryCount]);

  function retryLoading() {
    setRetryCount(retryCount + 1);
  }

  return (
    <section>
      <Link to="/tasks">Back to tasks</Link>

      <h1 className="details-heading">Task details</h1>

      {loading && <p role="status">Loading task...</p>}

      {!loading && error && (
        <div>
          <p role="alert">{error}</p>

          <button className="button" onClick={retryLoading}>
            Try again
          </button>
        </div>
      )}

      {!loading && !error && !task && (
        <div>
          <h2>Task not found</h2>
          <p>This task does not exist. Return to the task list to choose another.</p>
        </div>
      )}

      {!loading && !error && task && (
        <TaskCard task={task} showDetailsLink={false} />
      )}
    </section>
  );
}

export default TaskDetailsPage;
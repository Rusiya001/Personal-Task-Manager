import {Link} from "react-router-dom";
import type { Task } from "../types/Tasks";

interface TaskCardProps {
  task: Task;
  showDetailsLink?: boolean;
}

function TaskCard({ task, showDetailsLink = true }: TaskCardProps) {
    return(
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

            {showDetailsLink && (
                <Link className="button" to={`/tasks/${task.id}`}>
                    View details
                    <span className="visually-hidden"> for {task.title}</span>
                </Link>
            )}
        
        </article>
    );
}

export default TaskCard;
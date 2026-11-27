import type {Task} from "../types/Tasks";

const TASKS_URL = '${import.meta.env.BASE_URL}data/tasks.json';

export async function getTasks(): Promise<Task[]> {
    const response = await fetch(TASKS_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch tasks`);
    }

    const tasks : Task[] = await response.json();
    return tasks;
}

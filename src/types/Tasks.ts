export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    priority: "low" | "medium" | "high";
    status:"Todo" | "In Progress" | "Done";
}
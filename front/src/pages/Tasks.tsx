import { useEffect, useState } from "react";
import type { Task } from "../types/task";
import { createTask, listTasks } from "../services/taskService";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [TaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    listTasks().then(setTasks);
  }, []);

  async function handleCreateTask() {
    const task = await createTask(TaskTitle);
    setTasks([...tasks, task]);
    setNewTaskTitle("");
  }
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <input
        className="rounded border border-slate-700 bg-slate-900 p-2"
        value={TaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={handleCreateTask} className="rounded bg-emerald-600 px-3 py-1">
        Adicionar
      </button>
      <ul className="flex flex-col gap-2 backdrop:blur-sm rounded border border-slate-700 bg-slate-900/50 p-4">
        {tasks.map((t) => <li key={t.id} className="text-slate-300" >{t.title}</li>)}
      </ul>
    </section>
  )
}

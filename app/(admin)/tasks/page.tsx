export default function TasksPage() {
  const dummyTasks = [
    { id: 1, title: "Design homepage", status: "In Progress" },
    { id: 2, title: "Fix login bug", status: "Completed" },
    { id: 3, title: "Update documentation", status: "Pending" },
    { id: 4, title: "Remove documentation", status: "Pending" },
    { id: 5, title: "Delete documentation", status: "Pending" },
  ];
  return (
    <div className="p-6">
      <div className="flex flex-1 items-start justify-start">
        <div className="w-full ">
          <h2 className="mb-4 text-xl font-semibold">Tasks</h2>
          <ul className="space-y-3 gap-3 ">
            {dummyTasks.map((task) => (
              <li key={task.id} className="rounded border ml-4 p-3 float-left w-[45%]">
                <div className="font-medium">{task.title}</div>
                <div className="text-xs text-muted-foreground">{task.status}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

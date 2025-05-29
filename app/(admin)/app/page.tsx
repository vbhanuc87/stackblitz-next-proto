export default function AppsPage() {
  const dummyApps = [
    { id: 1, name: "Project Tracker", status: "Active" },
    { id: 2, name: "CRM Dashboard", status: "Maintenance" },
    { id: 3, name: "Analytics Suite", status: "Active" },
    { id: 4, name: "HR Portal", status: "Inactive" },
    { id: 5, name: "Inventory Manager", status: "Active" },
  ];
  return (
    <div className="p-6">
      <div className="flex flex-1 items-start justify-start">
        <div className="w-full">
          <h2 className="mb-4 text-xl font-semibold">Apps</h2>
          <ul className="space-y-3 gap-3">
            {dummyApps.map((app) => (
              <li key={app.id} className="rounded border ml-4 p-3 float-left w-[45%]">
                <div className="font-medium">{app.name}</div>
                <div className="text-xs text-muted-foreground">{app.status}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
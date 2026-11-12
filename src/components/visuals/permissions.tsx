const ROWS: [string, boolean, boolean, boolean][] = [
  ["Manage company settings", true, false, false],
  ["Add and edit employees", true, false, false],
  ["Edit the floor layout", true, true, false],
  ["Plan work orders and tasks", true, true, false],
  ["Start and end work at stations", true, false, true],
  ["View reports and dashboards", true, true, false],
];

// The default roles and a slice of what each one allows. Admins can edit all of it.
export function PermissionsArt() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="matrix">
        <caption className="ui-muted" style={{ textAlign: "left", paddingBottom: 12 }}>
          Default roles — edit them or add your own
        </caption>
        <thead>
          <tr>
            <th scope="col">Permission</th>
            <th scope="col">Admin</th>
            <th scope="col">Manager</th>
            <th scope="col">Operator</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([label, ...cells]) => (
            <tr key={label}>
              <td>{label}</td>
              {cells.map((on, i) => (
                <td key={i} className={on ? "yes" : "no"}>
                  <span className="sr-only">{on ? "Yes" : "No"}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

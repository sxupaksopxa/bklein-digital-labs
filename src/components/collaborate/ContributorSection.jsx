import Card from "../common/Card.jsx";

export default function ContributorSection() {
  return (
    <Card>
      <h3 className="text-xl font-bold text-slate-950">Open-source Contributors</h3>
      <p className="mt-3 text-slate-600">
        Help improve projects with expert feedback, ideas, testing, documentation, UX improvements, or code contributions.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        <li>• Review project ideas</li>
        <li>• Improve usability and documentation</li>
        <li>• Contribute code where projects are open</li>
      </ul>
    </Card>
  );
}

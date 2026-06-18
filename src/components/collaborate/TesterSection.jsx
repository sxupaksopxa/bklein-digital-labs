import Card from "../common/Card.jsx";

export default function TesterSection() {
  return (
    <Card>
      <h3 className="text-xl font-bold text-slate-950">Customers and Early Testers</h3>
      <p className="mt-3 text-slate-600">
        Test emerging AI tools, share real-world feedback, and help shape practical improvements before wider adoption.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        <li>• Try project demos</li>
        <li>• Share use cases and pain points</li>
        <li>• Suggest adjustments for real workflows</li>
      </ul>
    </Card>
  );
}

import Card from "../common/Card.jsx";

export default function PartnerSection() {
  return (
    <Card>
      <h3 className="text-xl font-bold text-slate-950">Partners</h3>
      <p className="mt-3 text-slate-600">
        Your domain expertise combined with our AI and prototyping experience can become a useful solution for a real audience.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        <li>• Bring domain knowledge</li>
        <li>• Explore product opportunities</li>
        <li>• Build focused AI experiences together</li>
      </ul>
    </Card>
  );
}

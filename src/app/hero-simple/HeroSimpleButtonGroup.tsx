import Link from "../ui/common/Link";

export default function HeroSimpleButtonGroup() {
  return (
    <div className="flex gap-8">
      <Link to="#" variant="button" style="secondary">
        Learn more
      </Link>
      <Link to="#" variant="button" style="primary">
        See pricing
      </Link>
    </div>
  );
}

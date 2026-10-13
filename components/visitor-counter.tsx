import type { Lang } from "./copy";

export type VisitorCounts = { today: number; total: number };

export function VisitorCounter({
  counts,
  lang,
}: {
  counts?: VisitorCounts | null;
  lang: Lang;
}) {
  if (
    !counts ||
    !Number.isSafeInteger(counts.today) ||
    !Number.isSafeInteger(counts.total) ||
    counts.today < 0 ||
    counts.total < counts.today
  )
    return null;

  const format = new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US");
  const labels =
    lang === "fa"
      ? {
          title: "بازدیدهای سایت",
          today: "بازدیدکنندگان امروز",
          total: "مجموع بازدیدها",
        }
      : {
          title: "Site visits",
          today: "Visitors today",
          total: "Total visits",
        };

  return (
    <aside className="visitor-counter" aria-label={labels.title}>
      <div className="counter-heading">
        <span className="small-seed" aria-hidden="true" />
        <span>{labels.title}</span>
      </div>
      <dl className="counter-values">
        <div>
          <dt>{labels.today}</dt>
          <dd>{format.format(counts.today)}</dd>
        </div>
        <div>
          <dt>{labels.total}</dt>
          <dd>{format.format(counts.total)}</dd>
        </div>
      </dl>
    </aside>
  );
}

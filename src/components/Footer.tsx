export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-[var(--color-muted)]">
        <p className="mb-3 font-medium text-[var(--color-foreground)]">
          Rechtlicher Hinweis
        </p>
        <p className="mb-2 max-w-2xl mx-auto leading-relaxed">
          Diese Plattform bietet ausschliesslich rechtliche Informationen und
          stellt keine Rechtsberatung dar. Die angezeigten Ergebnisse ersetzen
          nicht die Konsultation einer qualifizierten Fachperson.
        </p>
        <p className="mb-6 max-w-2xl mx-auto leading-relaxed">
          Für persönliche Rechtsberatung wenden Sie sich bitte an eine
          zugelassene Anwältin oder einen zugelassenen Anwalt in der Schweiz.
        </p>
        <div className="border-t border-[var(--color-border)] pt-4 text-xs text-[var(--color-muted)]">
          &copy; {new Date().getFullYear()} LawHelper.ch &mdash; Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}

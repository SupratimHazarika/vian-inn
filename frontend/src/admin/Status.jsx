const tones = {
  Arriving: 'bg-teal/10 text-teal',
  Confirmed: 'bg-teal/10 text-teal',
  'In house': 'bg-sand text-ink',
  Occupied: 'bg-sand text-ink',
  Seated: 'bg-sand text-ink',
  Departing: 'bg-amber-100 text-amber-900',
  Cleaning: 'bg-amber-100 text-amber-900',
  Kitchen: 'bg-amber-100 text-amber-900',
  Reserved: 'bg-teal/10 text-teal',
  Vacant: 'bg-white text-muted border border-line',
  'Checked out': 'bg-white text-muted border border-line',
  Unused: 'bg-white text-muted border border-line',
}

export function Status({ value }) {
  return (
    <span
      className={`inline-flex px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] ${tones[value] || 'bg-sand text-ink'}`}
    >
      {value}
    </span>
  )
}

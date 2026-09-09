import { Button } from '@/components/ui/button'

const fields = [
  ['Hotel name', 'Vian Inn'],
  ['Phone', '+91 97062 85131'],
  ['Address', '1st Floor, Guwahati Wholesale Building, Paltan Bazaar'],
  ['PIN', '781008'],
  ['Check-in', '12:00 PM'],
  ['Check-out', '11:00 AM'],
  ['Breakfast', '₹200 · not included'],
]

export function Settings() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-teal">Property</p>
      <h1 className="mt-1 font-serif text-4xl">Settings</h1>
      <form className="mt-8 max-w-xl space-y-4 border border-line bg-white p-6" onSubmit={(e) => e.preventDefault()}>
        {fields.map(([label, value]) => (
          <label key={label} className="block text-sm">
            <span className="text-xs uppercase tracking-[0.14em] text-muted">{label}</span>
            <input
              className="mt-1.5 h-11 w-full border border-line bg-cream px-3 outline-none focus:border-teal"
              defaultValue={value}
            />
          </label>
        ))}
        <Button type="button">Save changes</Button>
      </form>
    </div>
  )
}

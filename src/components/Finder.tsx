import { useEffect, useState, forwardRef } from 'react'
import find from '../lib/requests/finder'
import type { ScryfallCard } from '../types/ScryfallCard'

interface FinderProps {
  value: string
  onChange: (value: string) => void
  onResults: (results: ScryfallCard[]) => void
}

const Finder = forwardRef<HTMLInputElement, FinderProps>(({ value, onChange, onResults }, ref) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), 300)
    return () => clearTimeout(t)
  }, [value])

    useEffect(() => {
    if (debounced.trim() === '') {
        onResults([])
        return
    }

    const fetchCards = async () => {
        const result = await find(debounced)

        onResults(result.data)
    }

    fetchCards()
    }, [debounced, onResults])

  return (
    <div className="w-full flex justify-center mb-6">
      <input
        ref={ref}
        className="bg-muted-foreground rounded-full w-80 h-12 px-4"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar..."
      />
    </div>
  )
})

Finder.displayName = 'Finder'

export default Finder

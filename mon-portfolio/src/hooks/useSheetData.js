import { useState, useEffect } from 'react'

export function driveUrl(url) {
  if (!url) return ''
  const match = url.match(/[-\w]{25,}/)
  if (!match) return url
  return `https://drive.google.com/thumbnail?id=${match[0]}&sz=w800`
}

export function useSheetData(csvUrl) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(csvUrl)
      .then(r => r.text())
      .then(text => {
        const [headerLine, ...lines] = text.trim().split('\n')
        const headers = headerLine.split(',').map(h => h.trim())
        const rows = lines.map(line => {
          const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''))
          return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']))
        })
        setData(rows)
      })
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [csvUrl])

  return { data, loading, error }
}
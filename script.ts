const searchInput = document.getElementById('search-input') as HTMLInputElement
const $results = document.getElementById('results') as HTMLUListElement

searchInput.addEventListener('keyup', async (e) => {
  const query = searchInput.value.trim()
  if (query.length === 0) {
    $results.innerHTML = ''
    return
  }

  const res = await fetch(
    'http://localhost:3001/?q=' + encodeURIComponent(query),
  )
  const json = await res.json()

  const result = json
    .map((item: { name: string }) => `<li>${item.name}</li>`)
    .join('')

  if ($results) {
    $results.innerHTML = result
  }
})

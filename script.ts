const searchInput = document.getElementById('search-input') as HTMLInputElement
const $results = document.getElementById('results') as HTMLUListElement

if ($results) {
  $results.innerHTML = '<li class="hint">Start typing in the search bar</li>'
}

searchInput.addEventListener('keyup', async (e) => {
  const query = searchInput.value.trim()
  if (query.length === 0) {
    $results.innerHTML = '<li class="hint">Start typing in the search bar</li>'
    return
  }

  try {
    const res = await fetch(
      'http://localhost:3001/?q=' + encodeURIComponent(query),
    )
    const json = await res.json()

    const result =
      json.length === 0
        ? '<li>No search result</li>'
        : json
            .map(
              (item: { name: string; email: string; body: string }) =>
                `<li>
              <strong>${item.name}</strong> 
              <br>
              <span style="color: gray; font-size: 0.9em;">${item.email}</span>
              <br>
              <p>${item.body}</p>
            </li>`,
            )
            .join('')

    if ($results) $results.innerHTML = result
  } catch (error) {
    console.error('Error fetching search results:', error)
    $results.innerHTML = '<li>Error fetching results</li>'
  }
})

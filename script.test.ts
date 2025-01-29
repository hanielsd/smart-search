import { renderResults } from './script'

describe('Frontend Tests', () => {
  test('Should render search results correctly', () => {
    document.body.innerHTML = '<ul id="results"></ul>'

    const mockData = [
      {
        postId: 3,
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        body: 'This is a comment',
      },
    ]

    renderResults(mockData, document.querySelector('#results'))

    const results = document.querySelectorAll('#results li')
    expect(results.length).toBe(1)
    expect(results[0].innerHTML).toContain('John Doe')
    expect(results[0].innerHTML).toContain('john@example.com')
    expect(results[0].innerHTML).toContain('This is a comment')
  })
})

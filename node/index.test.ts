import { fetchNfilterComments } from './index'

describe('API Tests', () => {
  test('Should fetch and filter comments', async () => {
    const response = await fetchNfilterComments('modi')
    expect(Array.isArray(response)).toBe(true)
    expect(response.length).toBeGreaterThan(0)
    expect(response[0]).toHaveProperty('name')
    expect(response[0]).toHaveProperty('email')
    expect(response[0]).toHaveProperty('body')
  })
})

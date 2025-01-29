import app, { fetchNfilterComments } from './index'

import request from 'supertest'

const TEST_QUERY = 'modi'

describe('API Tests', () => {
  test('Should fetch and filter comments', async () => {
    const response = await fetchNfilterComments(TEST_QUERY)
    expect(Array.isArray(response)).toBe(true)
    expect(response.length).toBeGreaterThan(0)
    expect(response[0]).toHaveProperty('name')
    expect(response[0]).toHaveProperty('email')
    expect(response[0]).toHaveProperty('body')
  })

  test('API should return comments', async () => {
    const res = await request(app).get('/').query({ q: TEST_QUERY })
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })
})

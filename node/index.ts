import express, { Express } from 'express'
import cors from 'cors'
import axios from 'axios'
import { getData, storeData } from './cache'
import { JPHComment } from './types'

const app: Express = express()

app.use(cors())

export async function fetchNfilterComments(
  query: string,
): Promise<JPHComment[]> {
  const cachedComments = getData(query)
  if (cachedComments) return cachedComments

  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/comments?postId=3',
  )
  const commentsFiltered = data.filter((comment: any) =>
    comment.name.toLowerCase().includes(query.toLowerCase()),
  )
  storeData(query, commentsFiltered)

  return commentsFiltered
}

app.get('/', async (req, res) => {
  try {
    const query = (req.query.q as string) || ''
    const commentsFiltered = await fetchNfilterComments(query)

    res.status(200).send(commentsFiltered)
  } catch (e) {
    res.status(500).send({ error: 'Something went wrong, try again later!' })
  }
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

export default app

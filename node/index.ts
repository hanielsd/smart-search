import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { getData, storeData } from './cache'

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const query = (req.query.q as string) || ''

    const cachedComments = getData(query)
    if (cachedComments) {
      res.status(200).send(cachedComments)
      return
    }

    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/comments?postId=3',
    )
    const commentsFiltered = data.filter((comment: any) =>
      comment.name.toLowerCase().includes(query.toLowerCase()),
    )
    storeData(query, commentsFiltered)

    res.status(200).send(commentsFiltered)
  } catch (e) {
    res.status(500).send({ error: 'Something went wrong, try again later!' })
  }
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

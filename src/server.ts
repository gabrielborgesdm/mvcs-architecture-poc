import app from './routes'

const runServer = (port: number) => {
  app.listen(port, () => {
    console.log(`Running server on port ${port}`)
  })
}

export default runServer

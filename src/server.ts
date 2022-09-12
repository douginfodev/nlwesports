import express from 'express'

const app = express()

//rotas GET
app.get('/ads',(request,response) => {
  response.json([
    {id: 1,name:'nome 1'},
    {id: 2,name:'nome 5'},
    {id: 3,name:'nome 3'},
  ])

})

//escutar a porta do local host
app.listen(3333)
import Express from 'express';
import Products from './products.js'

const app = Express();
const port = 3000;
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

// GET PUT POST DELETE
// app.get()
// app.put()
// app.post()
// app.delete()

// MIDDLEWARE
function mid(req, res, next) {
    console.log(req.query)
    console.log(req.params)
    next()
}

app.get("/products/:id", mid, (req, res) => {
    res.json(Products.find((products) => {
        return +req.params.id === products.id
    }))
    // res.send(req.params)
    // res.json(Products)
})

app.post("/add", (req, res) => {
    // res.send(req.body)
    console.log(req.body.id)
    res.sendStatus(200)
})


app.listen(port, () => console.log("Listening on port " + port))
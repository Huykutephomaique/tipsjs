// khoi dong server 
const app = require("./src/app");

const PORT = 3055;

const server = app.listen(PORT, () => {
    console.log(`wsv eCommerce start with ${PORT}`)
})
// function abc() {
//      console.log(`wsv eCommerce start with ${PORT}`)
// const serve1r = app.listen(PORT, abc())

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit Server Express`))
})

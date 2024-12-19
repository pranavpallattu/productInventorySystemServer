const jsonServer = require("json-server")

const inventoryServer=jsonServer.create()

const middleware=jsonServer.defaults()

const router=jsonServer.router('db.json')

inventoryServer.use(middleware)
inventoryServer.use(router)

const PORT=4000 || process.env.port

inventoryServer.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
    
})
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors"); 

server.use(
  cors({
    origin: "https://kasir-frontend.vercel.app",
    credentials: true, // Mengizinkan pengiriman cookies
  })
);
// server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log("Server started on port 5000");
});

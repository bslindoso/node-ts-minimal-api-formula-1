import fastify from 'fastify'
import cors from '@fastify/cors';

const server = fastify({
  logger: true
})

// Registra o middleware CORS com a opção origin: "*", permitindo requisições de qualquer origem.
// Ideal para desenvolvimento, mas em produção, recomenda-se restringir as origens permitidas por segurança.
server.register(cors, {
  origin: "*" // origin: ["www.dio.me", "brunolindoso.com"] // Exemplo de como seria em produção
})

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Williams", base: "Grove, United Kingdom" }
]

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "Lando Norris", team: "McLaren" },
  { id: 5, name: "Carlos Sainz", team: "Ferrari" },
  { id: 6, name: "George Russell", team: "Mercedes" },
  { id: 7, name: "Sergio Perez", team: "Red Bull Racing" },
  { id: 8, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 9, name: "Oscar Piastri", team: "McLaren" },
  { id: 10, name: "Alexander Albon", team: "Williams" }
]

// cria um método GET que recebe como argumento:
// 1 - a rota
// 2 - o controller, que vai ser uma função
//     o retorno desta função será o que irá retornar na API

// Creates a GET endpoint /teams that returns all Formula 1 teams
server.get("/teams", async (request, response) => {
  response.type("application/json").code(200)
  return { teams }
})

// Creates a GET endpoint /teams/:id that will return a specific team based on the provided ID
server.get<{ Params: DriverParams }>("/teams/:id", async (request, response) => {
  const id: number = parseInt(request.params.id)
  const team = teams.find((t) => t.id === id)

  if (!team) {
    response.type("application/json").code(404)
    return { message: "Driver not found" }
  } else {
    response.type("application/json").code(200)
    return { team }
  }
})

// Creates a GET endpoint /drivers that returns all Formula 1 drivers
server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200)
  return { drivers: teams }
})

// Creates an interface to type check the id parameter that comes in the URL
interface DriverParams {
  id: string
}

// Creates a GET endpoint /drivers/:id that will return a specific driver based on the provided ID
server.get<{ Params: DriverParams }>("/drivers/:id", async (request, response) => {
  const id: number = parseInt(request.params.id)
  const driver = drivers.find((d) => d.id === id)

  if (!driver) {
    response.type("application/json").code(404)
    return { message: "Driver not found" }
  } else {
    response.type("application/json").code(200)
    return { driver }
  }
})


server.listen({ port: 3333 }, () => {
  console.log(`Server init`)
})
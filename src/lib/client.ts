import ky from "ky"

const client = ky.create({
  prefixUrl: "http://localhost:3000/api/",
  headers: { "Content-Type": "application/json" },
})

export default client

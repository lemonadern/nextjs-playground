import ky from "ky"

const client = ky.create({
    prefixUrl: "http://localhost:3000/api/",
    headers: { 'Content-Type': 'application/json' },
    timeout: 5000,
})

export default client
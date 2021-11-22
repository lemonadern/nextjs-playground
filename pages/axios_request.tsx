import type { NextPage } from "next"
import { useEffect, useState } from "react"
import axiosClient from "lib/axiosClient"

interface User {
  id: number,
  name: string,
}

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    axiosClient
      .get<User[]>("user/")
      .then(value => {
        setUsers(value.data)
        console.log("api call success.")
      })
      .catch(() => console.log("Error Occuered."))
  }, [])
  if (users == null) {
    return <p>loading</p>
  }
  return (
    <div>
      <h1>Here are List.</h1>
      {
        users.map(value =>
          <p key={value.id}>{value.id} : {value.name}</p>)
      }
    </div>
  )
}

export default Home

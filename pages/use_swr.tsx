import type { NextPage } from "next"
import { useEffect, useState } from "react"

import useSWR from "swr"
import client from "lib/client"

interface User {
  id: number,
  name: string,
}

const Home: NextPage = () => {
  const { data, error } = useSWR<User[]>("user", () => client.get("user").json<User[]>())

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          data.map(user => <li key={user.id}>{user.id} : {user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default Home

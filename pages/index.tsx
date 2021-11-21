import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import client from 'lib/client'

interface User {
  id: number,
  name: string,
}

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    client
      .get('user/').json<User[]>()
      .then(value => {
        setUsers(value)
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

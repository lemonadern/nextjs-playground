import client from "./client"

const fetcher = <T>(url: string): Promise<T> => {
  return client.get(url).json<T>()
}

export default fetcher
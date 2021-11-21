import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json([
        {
            id: 1,
            name: "Jason Bourne",
        },
        {
            id: 2,
            name: "Ethan Hunt",
        },
        {
            id: 3,
            name: "John Wick",
        },
        {
            id: 7,
            name: "James Bond",
        },
    ])
}
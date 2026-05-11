import { useEffect, useState } from 'react'
import { fetchUser } from './fetch-user'
import type { User } from './user.type.ts'
import UserItem from './user'

export default function Users() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
    fetchUser()
        .then((data) => {
            console.log("DATA:", data)
            setUsers(data)
        })
        .catch((err) => {
            console.error("ERREUR FETCH:", err)
        })
}, [])

    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}
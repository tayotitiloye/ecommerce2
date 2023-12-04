import { getServerSession } from "next-auth";
import { options } from "src/app/utilis/auth";


export function getSession(){
    return getServerSession(options)
}

export async function getCurrentUser(){
    const session = await getSession()
    return session?.user.id
}
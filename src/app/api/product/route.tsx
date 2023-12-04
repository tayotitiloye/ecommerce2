import { NextRequest, NextResponse } from "next/server"
import prisma from "src/lib/db"

export const GET = async () => {

    try {
        
        const products = await prisma.product.findMany()
        return new NextResponse(JSON.stringify(products), {status: 200})

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message:'something went wrong'}), {status:500})
    }
}
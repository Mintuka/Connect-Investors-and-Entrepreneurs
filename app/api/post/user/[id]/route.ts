import Post from "@/models/post"
import { connectToDB } from "@/utils/database"

export const GET = async({params}: any) => {
    try {
        await connectToDB()
        const userPosts = await Post.find({creator: params.id})
        if (!userPosts){
            return new Response('Posts not found', {status: 404})
        }
        return new Response(JSON.stringify(userPosts), {status: 200})
    }catch(error) {
        return new Response('Failed to get posts', {status: 500})
    }
}
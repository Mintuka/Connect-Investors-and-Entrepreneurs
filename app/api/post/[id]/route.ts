import Post from '@/models/post'
import { PostType } from '@/types/Post'
import {connectToDB} from '@/utils/database'

export const GET = async(request: Request, {params}: any) => {
    try{
        await connectToDB()
        const post = await Post.findById(params.id)
        if (!post) {
            return new Response('Post not found', {status: 404})
        }
        return new Response(JSON.stringify(post), {status: 200})
    }catch(error){
        return new Response('Failed to get post', {status: 500})
    }
}

export const PATCH = async(request: Request, {params}: any) => {
    const {post, tag}: PostType = await request.json()
    try {
        await connectToDB()
        const existingPost = await Post.findById(params.id)
        if (!existingPost) {
            return new Response('Post not found', {status: 404})
        }
        existingPost.post = post
        existingPost.tag = tag
        await existingPost.save()
        return new Response('Successfullly updated', {status: 200})
    }catch(error) {
        return new Response('Failed to update', {status: 500})
    }
}

export const DELETE = async({params}: any) => {
    try {
        await connectToDB()
        await Post.findByIdAndDelete(params.id)
        return new Response('Successfully deleted', {status: 200})
    }catch(error){
        return new Response('Failed to delete', {status: 500})
    }
}
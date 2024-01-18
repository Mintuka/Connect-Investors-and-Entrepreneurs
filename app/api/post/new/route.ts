import Post from '@/models/post';
import { connectToDB } from '@/utils/database';

export const POST = async (request: Request) => {
    console.log('hello')
    const { creator, post, tag } = await request.json();
    console.log('asdf', creator, post, tag)
    try {
        await connectToDB();
        const newPost = await Post.create({ creator, post, tag });
        console.log(
            'saved'
        )
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        console.log('Failed', error)
        return new Response("Failed to create a new post", { status: 500 });
    }
}
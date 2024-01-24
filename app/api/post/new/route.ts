import Post from '@/models/post';
import { connectToDB } from '@/utils/database';

export const POST = async (request: Request) => {
    const { creator, post, tag } = await request.json();
    try {
        await connectToDB();
        const newPost = await Post.create({ creator, post, tag });
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new post", { status: 500 });
    }
}
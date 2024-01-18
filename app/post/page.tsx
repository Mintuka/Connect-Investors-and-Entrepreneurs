'use client'

import { useState } from "react";

const Post = () => {
    const [submitting, setIsSubmitting] = useState(false)

    const createPost = async (e:any) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
          const response = await fetch("/api/post/new", {
            method: "POST",
            body: JSON.stringify({
              post: 'post.prompt',
              creator: 'session?.user.id',
              tag: 'post.tag',
            }),
          });

        } catch (error) {
          console.log('err',error);
        } finally {
          setIsSubmitting(false);
        }
      };

    return (
        <>
            <div onClick={createPost}>Post</div>
        </>
    )
}

export default Post
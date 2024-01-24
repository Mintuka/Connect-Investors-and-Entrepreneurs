'use client'

import Image from "next/image";
import { ChangeEvent, useState } from "react";

const Post = () => {
    const [submitting, setIsSubmitting] = useState(false)
    const [data, setData] = useState({post: '', creator: '', tag: ''})

    const createPost = async (e:any) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
          const response = await fetch("/api/post/new", {
            method: "POST",
            body: JSON.stringify({...data}),
          });

        } catch (error) {
          console.log('err',error);
        } finally {
          setIsSubmitting(false);
        }
      };

    return (
        <>
          <div className="flex flex-col p-4">
            <label htmlFor="post" className="mx-2">Post</label>
            <textarea name="post" id="post" cols={30} rows={10} className="border outline-none p-2 m-2" disabled={submitting} value={data.post} onChange={(e:ChangeEvent<any>) => setData({...data, post: e.target.value})}/>
            <label htmlFor="tag" className="mx-2">Tag</label>
            <input type="text" className="border outline-none p-2 m-2" disabled={submitting} onChange={(e:ChangeEvent<any>) => setData({...data, tag: e.target.value})}/>
            <button className="flex justify-center items-center bg-green-400 p-2 m-2" onClick={createPost} disabled={submitting} >
              <div className="relative w-[fit-content] decoration-sky-500">
                Post
                {submitting && <Image src='assets/images/loading.svg' width={25} height={25} alt='loading' className="absolute top-0 left-[-30px]"/>}
              </div>
            </button>
          </div>
        </>
    )
}

export default Post
// import Question from '@/components/froms/Question';
import Question2 from '@/components/froms/Question2';
import { getUserId } from '@/lib/action/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const askquestion = async() => {
    const userId = "clerk123"
    // const {userId} = auth();
    if (!userId) {
        redirect("/sign-in");
    }
    const mongoUser = await getUserId({userId});
    console.log(mongoUser)
    return (
        <div className='mx-auto w-full max-w-[90%] mt-8'>
           <h1 className="text-xl font-bold">Ask a Question</h1>
           <div className="mt-5">
            <Question2 mongoUserid={JSON.stringify(mongoUser.clerkId)}/>
            {/* <Question/> */}
           </div>
        </div>
    );
};

export default askquestion;
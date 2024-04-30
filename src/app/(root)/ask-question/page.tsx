// import Question from '@/components/froms/Question';
import Question2 from '@/components/froms/Question';
import { getUserById } from '@/lib/action/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const askquestion = async() => {
    const userId = "234567890"
    // const {userId} = auth();
    if (!userId) {
        redirect("/sign-in");
    }
    const mongoUser = await getUserById({userId});
    // console.log(mongoUser)
    return (
        <div className='mx-auto w-full max-w-[90%] mt-8'>
           <h1 className="text-xl font-bold">Ask a Question</h1>
           <div className="mt-5">
            <Question2 mongoUserid={JSON.stringify(mongoUser._id)}/>
            {/* <Question/> */}
           </div>
        </div>
    );
};

export default askquestion;
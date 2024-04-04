import Question from '@/components/froms/Question';
import React from 'react';

const askquestion = () => {
    return (
        <div className='mx-auto w-full max-w-[90%]'>
           <h1 className="text-xl font-bold">Ask a Question</h1>
           <div className="mt-5">
            <Question/>
           </div>
        </div>
    );
};

export default askquestion;
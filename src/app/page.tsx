'use client';

import { useState } from 'react';
import { faq } from './data';
import Image from 'next/image'

export default  function PostsPage() {
   const [showAnswer, setShowAnswer] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setShowAnswer(showAnswer === index ? null : index);
  };

  return (
    <div className="bg-white p-11  rounded-xl  ">
      <div className='flex flex-row gap-4 mb-7'>
       <Image src={'/images/icon-star.svg'} alt={"ICON"} width="27" height="27" />

        <h1 className=' text-4xl font-bold text-[hsl(292, 42%, 14%)]'>FAQs</h1>
      </div>
      {faq && faq.length > 0 ? (

        <div className='flex flex-col text-start gap-5 '>
          
          {faq.map((faq, index) => (
            <div key={index} className="border-b-[0.01px] border-b-light-grayish-blue pb-5 ">
              <div className='flex justify-between' >
              <h1 className="font-bold text-sm md:w-90">{faq.question}</h1>

              {showAnswer==index ?
                 <Image src={'/images/icon-minus.svg'} alt={"ICON"}  width="22" height="22" className='ml-6 cursor-pointer' onClick={() => toggleAnswer(index)} />

                 :
                 <Image src={'/images/icon-plus.svg'} alt={"ICON"} width="22" height="22" className='ml-6 cursor-pointer' onClick={() => toggleAnswer(index)}/>

              }
              </div>
           
              {showAnswer==index && <h2 className='text-sm font-light md:w-90'>{faq.answer}</h2>}

            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

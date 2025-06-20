import { faq } from './data';
import Image from 'next/image'

export default async function PostsPage() {
  return (
    <div className="bg-white p-11  rounded-xl  ">
      <div className='flex flex-row gap-4 mb-7'>
       <Image src={'/images/icon-star.svg'} alt={"ICON"} width="27" height="27" />

        <h1 className=' text-4xl font-bold text-[hsl(292, 42%, 14%)]'>FAQs</h1>
      </div>
      {faq && faq.length > 0 ? (
        <div className='flex flex-col text-start gap-5 '>
          {faq.map((faq, index) => (
            <div key={index} className="border-b-[0.01px] border-b-light-grayish-blue pb-5">
              <h1 className="">{faq.question}</h1>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between rounded-4xl '>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex items-center justify-center'>{props.id + 1}</h2>
        <div>
            <p className='text-2xl text-shadow-2xs leading-relaxed text-white mb-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo vero velit doloremque repellendus itaque!</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className='  text-white text-lg font-semibold px-8 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className='  text-white text-lg font-semibold px-4 py-2 rounded-full'><ArrowRight /></button>
            </div>        
        </div>       
    </div>
  )
}

export default RightCardContent



const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
                <div className='h-40 w-44 rounded-2xl overflow-hidden border-3 border-gray-400'>
                    <img className='h-full w-full object-cover' 
                    src={props.elem.download_url} alt="" />
                  </div>
                  <h3 className='font-bold text-lg'>{props.elem.author}</h3>
                </a>
    </div>
  )
}

export default Card

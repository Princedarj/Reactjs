import RightCard from './RightCard'


const RightContent = (props) => {
    console.log(props.users)
  return (
    <div id='right' className='h-full w-3/4 overflow-x-auto flex gap-10 flex-nowrap p-6 rounded-4xl '>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
        })}
    </div>
  )
}

export default RightContent

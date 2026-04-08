import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className="h-full w-80 shrink-0 overflow-hidden relative rounded-4xl ">
      <img src={props.img} alt="" 
      className="h-full w-full object-cover rounded-4xl"/>

      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  )
}

export default RightCard

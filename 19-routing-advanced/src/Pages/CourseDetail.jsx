import { useParams } from "react-router-dom"

const CourseDetail = () => {

  const params = useParams()
 ;

  
  return (
    <div>
      <h1 className=' text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      Welcome To The {params.CourseID} Course Details Page.</h1>
    </div>
  )
}

export default CourseDetail

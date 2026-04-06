import Card from './components/Card';

const App = () => {

  const jobOpenings = 
    [
      {
        "brandLogo": "https://logo.clearbit.com/google.com",
        "companyName": "Google",
        "datePosted": "5 days ago",
        "post": "Frontend Developer",
        "tag1": "Full Time",
        "tag2": "Junior Level",
        "pay": "$45/hr",
        "location": "Bangalore, India"
      },
      {
        "brandLogo": "https://logo.clearbit.com/amazon.com",
        "companyName": "Amazon",
        "datePosted": "2 weeks ago",
        "post": "Backend Engineer",
        "tag1": "Full Time",
        "tag2": "Senior Level",
        "pay": "$60/hr",
        "location": "Hyderabad, India"
      },
      {
        "brandLogo": "https://logo.clearbit.com/meta.com",
        "companyName": "Meta",
        "datePosted": "1 week ago",
        "post": "React Developer",
        "tag1": "Part Time",
        "tag2": "Mid Level",
        "pay": "$50/hr",
        "location": "Remote"
      },
      {
        "brandLogo": "https://logo.clearbit.com/apple.com",
        "companyName": "Apple",
        "datePosted": "3 days ago",
        "post": "iOS Developer",
        "tag1": "Full Time",
        "tag2": "Senior Level",
        "pay": "$70/hr",
        "location": "California, USA"
      },
      {
        "brandLogo": "https://logo.clearbit.com/netflix.com",
        "companyName": "Netflix",
        "datePosted": "10 days ago",
        "post": "UI/UX Designer",
        "tag1": "Contract",
        "tag2": "Mid Level",
        "pay": "$55/hr",
        "location": "Los Angeles, USA"
      },
      {
        "brandLogo": "https://logo.clearbit.com/microsoft.com",
        "companyName": "Microsoft",
        "datePosted": "4 weeks ago",
        "post": "Cloud Engineer",
        "tag1": "Full Time",
        "tag2": "Senior Level",
        "pay": "$65/hr",
        "location": "Seattle, USA"
      },
      {
        "brandLogo": "https://logo.clearbit.com/tesla.com",
        "companyName": "Tesla",
        "datePosted": "6 days ago",
        "post": "Software Engineer",
        "tag1": "Full Time",
        "tag2": "Junior Level",
        "pay": "$48/hr",
        "location": "Austin, USA"
      },
      {
        "brandLogo": "https://logo.clearbit.com/adobe.com",
        "companyName": "Adobe",
        "datePosted": "2 days ago",
        "post": "Full Stack Developer",
        "tag1": "Full Time",
        "tag2": "Mid Level",
        "pay": "$52/hr",
        "location": "Noida, India"
      },
      {
        "brandLogo": "https://logo.clearbit.com/uber.com",
        "companyName": "Uber",
        "datePosted": "3 weeks ago",
        "post": "Data Engineer",
        "tag1": "Full Time",
        "tag2": "Senior Level",
        "pay": "$58/hr",
        "location": "San Francisco, USA"
      },
      {
        "brandLogo": "https://logo.clearbit.com/airbnb.com",
        "companyName": "Airbnb",
        "datePosted": "8 days ago",
        "post": "DevOps Engineer",
        "tag1": "Remote",
        "tag2": "Mid Level",
        "pay": "$54/hr",
        "location": "Remote"
      }
    ];

  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        console.log(idx);
        
        return <div id={`job-${idx}`} key={idx}>  
        <Card
          companyName={elem.companyName}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        /> 
        </div>
      })}
    
    </div>  
  )
}

export default App

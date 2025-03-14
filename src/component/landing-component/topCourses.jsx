import React from 'react'
import http from '../../core/services/interceptor'
import { useQuery } from 'react-query'


const TopCourses = () => {
    const getTopCourse = async () =>{
        const res = await http.get('/Home/GetCoursesTop?Count=4')
        console.log(res);
        return res
    }
    const {data} = useQuery('topCourse',getTopCourse)
  return (
    <div>
        {data?.map(item=>{
            return(
                <h2>{item.title}</h2>
            )
        })}
    </div>
  )
}

export default TopCourses
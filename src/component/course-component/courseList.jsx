import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import http from '../../core/services/interceptor'

const CourseList = () => {
    const getCourseList = async () =>{
        const res = await http.get('/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0')
        return res
    }

    const {data} = useQuery('courseList' , getCourseList)
  return (
    <div>
        {data?.courseFilterDtos.map(item=>{
            return(
                <div>{item.title}</div>
            )
        })}
    </div>
  )
}

export default CourseList
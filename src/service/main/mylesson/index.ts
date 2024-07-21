import {Request} from "../../index";

//teacher
export function getTeacherCourseById(id: number): any {
  return Request.get({
    url: `/courses/teacher/${id}`
  })
}

export function InsertTeacherCourseById(id: number, data: any): any {
  return Request.post({
    url: `/courses/createByAI?teacherId=${id}`,
    data: data
  })
}

//student

export function getAllCourses(): any {
  return Request.get({
    url: `/courses`
  })
}

export function getStudentCourseById(id: number): any {
  return Request.get({
    url: `/courses/student/${id}`
  })
}

export function getStudentExercises(sectionId: any, id: any): any {
  return Request.get({
    url: `/sections/${sectionId}/records/${id}`
  })
}

//video 
export function getSectionVideo(id: number): any {
  return Request.get({
    url: `/sections/${id}/download/video`
  })
}

export function postSectionVideo(id: number): any {
  return Request.post({
    url: `/sections/${id}/upload`
  })
}
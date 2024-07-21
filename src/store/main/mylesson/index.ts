import { defineStore } from 'pinia'
import {
  getTeacherCourseById,
  getStudentCourseById,
  getAllCourses,
  InsertTeacherCourseById,
  getSectionVideo,
  getStudentExercises
} from '@/service/main/mylesson/index'

interface stateType {
  teacherCourseList: any[]
  studentCourseList: any[]
  allCourseList: any[]
  videoList: any[]
  sectionId: number
  exercises: any[]
}

export const useMylessonStore = defineStore('mylesson', {
  state: (): stateType => ({
    teacherCourseList: [],
    studentCourseList: [],
    allCourseList: [],
    videoList: [],
    sectionId: 0,
    exercises: []
  }),
  actions: {
    //mylesson-teacher
    async getTeacherCourseListAction(teacherId: number) {
      const teacherCourseList = await getTeacherCourseById(teacherId)
      this.teacherCourseList = teacherCourseList
    },
    async InsertTeacherCourseListAction(teacherId: number, data: any) {
      const teacherCourseList = await InsertTeacherCourseById(teacherId, data)
      this.teacherCourseList = teacherCourseList
    },

    //mylesson-student
    async getStudentCourseListAction(studentId: number) {
      const studentCourseList = await getStudentCourseById(studentId)
      this.studentCourseList = studentCourseList
    },
    async getAllCourseListAction() {
      const allCourseList = await getAllCourses()
      this.allCourseList = allCourseList
    },

    async getStudentExercisesAction(sectionId: any, id: any) {
      const studentExercises = await getStudentExercises(sectionId, id)
      this.exercises = studentExercises
    },
    //video
    async getVideoAction(sectionId: any) {
      const videoList = await getSectionVideo(sectionId)
      this.videoList = videoList
      this.sectionId = sectionId
    },
    //sectionId
    getSectionId(sectionId: any) {
      this.sectionId = sectionId
    }
  }
})

export default useMylessonStore

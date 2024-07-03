import { useRouter } from 'vue-router'

export const formatClassLists = (list: any[]): any[] => {
  const se = []
  for (let major of list) {
    for (let chapter of major.chapters) {
      for (let section of chapter.sections) {
        if (section !== undefined) {
          se.push(section)
        }
      }
    }
  }
  return se
}

// export const formatMyLessionRouteChildren1 = (
//   list: any[],
//   component: Comment
// ) => {

//   const children = []
//   children.push({
//     path: `/main/mylession/`,
//     redirect: '/main/mylession/1'
//   })
//   for (let i = 0; i < list.length; i++) {
//     let route = {
//       path: `/main/mylession/${i}`,
//       component: component,
//       query: {
//         id: i
//       }
//     }
//     children.push(route)
//   }
// }

export const formatMyLessionRouteChildren = (
  list: any[],
  component: any,
  router: any
) => {
  const se = []
  for (let major of list) {
    for (let chapter of major.chapters) {
      for (let section of chapter.sections) {
        if (section !== undefined) {
          se.push(section)
        }
      }
    }
  }
  router.addRoute('mylession', {
    path: `/main/mylession/`,
    redirect: '/main/mylession/1'
  })
  for (let i = 0; i < se.length; i++) {
    router.addRoute('mylession', {
      path: `/main/mylession/${i}`,
      component: component
    })
    // router.push({
    //   path: `/main/mylession/${i}`,
    //   query: {
    //     id: i
    //   }
    // })
  }
}

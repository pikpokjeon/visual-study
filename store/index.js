// export const dispatch
export const state = () => ({
  lang: 'ko',
  routeTree: undefined,
  categories: {
    math: [
      { title: '대수학', path: '/math/algebra', publish: false },
      { title: '삼각법', path: '/math/trigonometry', publish: false },
    ],
    computer: [
      {
        depth: 1,
        title: '컴퓨터 과학',
        path: '/computer/computer-science',
        publish: false,
        subject : [{depth:2,title: '알고리즘',path: '/computer/algorithms', publish: false, }
        ],
      },
      
      { depth: 1,title: '인터넷', path: '/computer/internet', publish: false },
    ]
  }
})

export const mutations = {
  setRouteTree(state, newRouteTree) {
    state.routeTree = newRouteTree
  },
}

export const actions = {
  async updateRouteTree(store, app) {
    const { lang } = store.state
    const routeTree = new Map()
    for (const { path, component } of app.router.options.routes) {
      const pathArr = pathStrToArr(path)
      const componentObj = await component()
      const localeName = componentObj[lang]
      const isPublic = componentObj.isPublic || false
      addBranch(routeTree, pathArr, path, localeName, isPublic)
    }
    function addBranch(tree, pathArr, path, localeName, isPublic) {
      const branch = pathArr.shift()
      if (!tree.has(branch)) {
        tree.set(branch, { branches: new Map() })
      }
      if (pathArr.length < 1) {
        tree.set(branch, {
          branches: tree.get(branch).branches,
          path,
          localeName,
          isPublic,
        })
      } else {
        addBranch(
          tree.get(branch).branches,
          pathArr,
          path,
          localeName,
          isPublic
        )
      }
    }
    store.commit('setRouteTree', routeTree)
  },
  async nuxtServerInit(store, { app }) {
    await store.dispatch('updateRouteTree', app)
  },
}

export const getters = {
  pathInfo: ({ routeTree }) => (path) => {
    const breadcrumbs = []
    const subBranches = []
    const pathArr = pathStrToArr(path)
    breadcrumbFinder(routeTree, pathArr)
    return { breadcrumbs, subBranches }
    function breadcrumbFinder(branches, pathArr) {
      const branch = branches.get(pathArr.shift())
      console.log(branches,branch,pathArr)
      breadcrumbs.push({
        localeName: branch.localeName,
        path: branch.path,
      })
      if (pathArr.length * branch.branches.size > 0) {
        breadcrumbFinder(branch.branches, pathArr)
      } else {
        for (const b of branch.branches.values()) {
          subBranches.push({
            localeName: b.localeName,
            path: b.path,
            isPublic: b.isPublic,
          })
        }
      }
    }
  },
}

function pathStrToArr(pathStr) {
  return pathStr.split('/').filter((v, i) => v || i < 1)
}

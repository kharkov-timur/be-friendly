let initialState = {
  sidebar: [
    {
      id: 1,
      name: 'Andrew',
      src: 'https://climtour.uz/images/user.png'
    },
    {
      id: 2,
      name: 'Sasha',
      src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
      id: 3,
      name: 'Sveta',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiQ63wXcfaE7w3wFexsqcuvwGwevpQHfEvw&usqp=CAU'
    },
  ]
}

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default sidebarReducer

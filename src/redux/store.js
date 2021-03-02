let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Hi, how are you?',
          src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          likesCount: 12
        },
        {
          id: 2,
          message: 'It\'s my first post',
          src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          likesCount: 11
        },
        {
          id: 3,
          message: 'Blabla',
          src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          likesCount: 11
        },
        {
          id: 4,
          message: 'Dada',
          src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          likesCount: 11
        }
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Dmitri'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Victor'},
      ],
      messages: [
        {
          id: 1,
          message: 'Hi, how are you?',
          src: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
          likeCount: 15,
        },
        {
          id: 2,
          message: 'Hi, how are you?',
          src: 'https://play-lh.googleusercontent.com/-cyXF2_vs8LjdVY74AZTDL7TTkPPZnQFEX98axY2LQtDy-r6_NbW77VAd5WRYJ9_dg',
          likeCount: 20,
        },
        {
          id: 3,
          message: 'Hi, how are you?',
          src: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
          likeCount: 10,
        },
        {
          id: 4,
          message: 'Hi, how are you?',
          src: 'https://play-lh.googleusercontent.com/-cyXF2_vs8LjdVY74AZTDL7TTkPPZnQFEX98axY2LQtDy-r6_NbW77VAd5WRYJ9_dg',
          likeCount: 25,
        },
      ],
      newMessageText: ''
    },
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
}

export default store

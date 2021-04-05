import {rerenderEntireTree} from '../render';

let state = {
  profilePage: {
    text: [
      {id: 1, text: 'Content'},
      {id: 2, text: 'Lalalalalal'},
      {id: 3, text: 'Shakalaka'},
    ],
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Alexander Vetrov'},
      {id: 2, name: 'Sveta Vetrova'},
      {id: 3, name: 'Pasha Vetrov'}
    ],
    messages: [
      {message: 'Lalala'},
      {message: 'Papapa'}
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    text: postMessage
  }
  state.profilePage.text.push(newPost);
  rerenderEntireTree(state);
}

export default state;




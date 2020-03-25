import sidebarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'Its my first post', likesCount: 11 }
            ],
            newPostText: '123'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Den', foto: 'https://narodna-pravda.ua/wp-content/uploads/2017/11/Stethem.jpg' },
                { id: 2, name: 'Andrey', foto: 'https://videomore.ru/system/images/project_heroes/6131_converted_origin.jpg?1569340606' },
                { id: 3, name: 'Alexa', foto: 'https://s13.stc.all.kpcdn.net/share/i/12/10421794/inx960x640.jpg' },
                { id: 4, name: 'Polya', foto: 'https://s8.cdn.teleprogramma.pro/wp-content/uploads/2019/08/aaa1f662236b273d7d3b2f8148880c72.jpg' },
                { id: 5, name: 'Dimych', foto: 'https://most-beauty.ru/wp-content/uploads/2017/08/Hardi.jpg' },
                { id: 6, name: 'Dima', foto: 'https://www.eg.ru/wp-content/uploads/2018/10/daniel-craig-film-premiere-spectre-014416.jpg' }
            ],
            messages: [
                { id: 1, text: 'Hi', person: "friend" },
                { id: 2, text: 'How are you?', person: "me" },
                { id: 3, text: 'Yo!', person: "friend" }
            ],
            newMessageText: ''

        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  // { type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        // this._state.usersPage = usersReducer(this._state.usersPage, action);

        this._callSubscriber(this._state);

    }
}


export default store;
window.state = store;

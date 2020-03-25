const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: 4,
                text: state.newMessageText,
                person: "me"
            };

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default dialogsReducer;
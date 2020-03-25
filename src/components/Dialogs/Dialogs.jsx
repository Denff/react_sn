import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} foto={d.foto} />);
    let messagesElements = state.messages.map(m => <Message text={m.text} key={m.id} person={m.person} />);
    let newMessageText = state.newMessageText;


    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>


                <div className={s.newMessage}>
                    <div className={s.enterMessage}>
                        <textarea
                            placeholder="enter message"
                            onChange={onNewMessageChange}
                            ref={newMessageElement}
                            value={props.newMessageText} />
                    </div>
                    <div className={s.sendMessage}>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
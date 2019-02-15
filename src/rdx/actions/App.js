
import { START_APP, FETCH_UNREAD_MAILS, FETCH_UNREAD_MAILS_BY_TYPE, FETCH_ALL_MAILS_BY_TEXT_ENTRY } from '../types';
import data from '../../data';

export const fireMeUp = () => ({
    type: START_APP,
    payload: data.filter(mail => !mail.read && mail.type === "inbox")
});
export const fireUnreadMail = () => ({
    type: FETCH_UNREAD_MAILS,
    payload: data.filter(mail => !mail.read && mail.type === "inbox").length
});
export const fireMailsByType = (type) => ({
    type: FETCH_UNREAD_MAILS_BY_TYPE,
    payload: {
        mails: data.filter(mail => !mail.read && mail.type === type),
        currentMailBox: type
    }
});
export const fireMailsByTextEntry = (text) => ({
    type: FETCH_ALL_MAILS_BY_TEXT_ENTRY,
    payload: data.filter(mail => mail.body.toLowerCase().includes(text) || mail.subject.toLowerCase().includes(text))
    
});
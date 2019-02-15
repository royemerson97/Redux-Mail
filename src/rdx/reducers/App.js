
import { START_APP, FETCH_UNREAD_MAILS, FETCH_UNREAD_MAILS_BY_TYPE, FETCH_ALL_MAILS_BY_TEXT_ENTRY } from 'rdx/types';

const APP_INITIAL_STATE = {
    started: false,
    mails : [],
    unread : 0,
    currentMailBox : 'inbox'
};

export default function(state = APP_INITIAL_STATE, action) {
    if (action.type === START_APP) { 
        return {
            ...state,
            started : true,
            mails : action.payload
        };
    }
    else if (action.type === FETCH_UNREAD_MAILS) {
        return{
            ...state,
            unread : action.payload.mails
        };
    }
    else if (action.type === FETCH_UNREAD_MAILS_BY_TYPE) {
        return{
            ...state,
            currentMailBox : action.payload.currentMailBox,
            mails : action.payload.mails
        };
    }
    else if (action.type === FETCH_ALL_MAILS_BY_TEXT_ENTRY) {
        return{
            ...state,
            mails : action.payload
        }
    }
    return state;
}
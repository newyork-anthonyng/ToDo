const title = (state = '', action) => {
    switch(action.type) {
        case 'EDIT_TITLE':
            return action.title
        default:
            return state;
    }
}

export default title;
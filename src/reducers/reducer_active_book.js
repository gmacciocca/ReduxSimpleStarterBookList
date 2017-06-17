// The "state" argument is not the application state,
// but it's only the state this reduces is responsible for.
export default function(state = null, action) {
    switch (action.type) {
        case "BOOK_SELECTED":
            return action.payload;
            break;
    }
    return state;
}

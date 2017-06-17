export function selectBook(book) {
    console.log("Book has been selected:", book.title);
    // selectBook is an action creator and it needs to return an
    // action object with a type property and a payload (in this case "book")
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}

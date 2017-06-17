import React from "react";

// import this to connect to redux (hence promoting BookList from component to container)
import { connect } from "react-redux";

import { selectBook as selectBookActionCreatorFunc } from "../actions/index";
import { bindActionCreators } from "redux"

class BookList extends React.Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBookActionCreator(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="boook-list list-group col-sm-4" >
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // whatever returns from here will show up as props inside BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as
// props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBookActionCreator is called, the result should be passed
    // to all of our reducers
    // The bindActionCreators below makes sure the action specified get dispatched to all the reducers
    return bindActionCreators({ selectBookActionCreator: selectBookActionCreatorFunc }, dispatch);
}

// This is where the magic connection between redux and react happens!
// Promote BookList from a component to a container -- it needs to know
// about this new dispatch method (selectBookActionCreator).
// Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

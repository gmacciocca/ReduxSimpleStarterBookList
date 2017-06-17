import React from "react";
import { connect } from "react-redux";

class BookDetail extends React.Component {
    render() {
        if (!this.props.book) {
            return <div>Please select a book</div>;
        }
        return (
            <div>
                <h3>{this.props.book.title}</h3>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);

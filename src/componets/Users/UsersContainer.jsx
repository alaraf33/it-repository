import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers
} from "../../redax/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    getUsersTest,
    getFollowingInProgress,
    getIsFetching,
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
} from "../../redax/users_selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);

    }

    onPageChanged = (pageNumber) => {
        let {getUsers, pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);

    }

    render() {
        console.log("USERS");
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: getUsersTest(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose (
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
) (UsersContainer);
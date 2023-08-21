import { FriendsList } from "./FriendList.styled"
import { FriendsListItem } from "./FriendListItem"
import propTypes from 'prop-types';
export const FriendList = (props) => {
    return (
       <FriendsList>
            <FriendsListItem friends={props.friendsData} />
        </FriendsList>
    )
}

FriendList.propTypes = {
    friendsData: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            isOnline: propTypes.bool.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired
       })
   )
}

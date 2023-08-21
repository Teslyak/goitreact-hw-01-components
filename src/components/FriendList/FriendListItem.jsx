import { Image, Item, Name, Status } from "./FriendListItem.styled";
export const FriendsListItem = (props) => {
    return (
        props.friends.map(({ avatar, name, isOnline, id }) => {
            return (
                <Item key={id}>
                    <Status $status={isOnline ? 1 : 0}></Status>
                    <Image src={avatar} alt="User avatar" width="48"/>
                    <Name>{name}</Name>
                </Item>

 
            )
        })
      
    )
}


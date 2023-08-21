import {
    ProfileWrap,
    DescriptionWrap,
    ImgProfile,
    DiscrpName,
    DiscrpTag,
    DiscrpLocation,
    StatProfile,
    StatList,
    StatSpanLabel,
    StatSpanQuantity,

} from "./Profile.styled"
import propTypes from 'prop-types';

export const Profile = ({ userInfo: { avatar, username, tag, location, stats } }) => {
    return (
   <ProfileWrap>
        <DescriptionWrap>
          <ImgProfile
      src={avatar}
      alt="User avatar"
    />
    <DiscrpName>{username}</DiscrpName> 
          <DiscrpTag> @{tag}</DiscrpTag>      
    <DiscrpLocation>{location}</DiscrpLocation>
  </DescriptionWrap>

  <StatProfile>
          <StatList>
            <StatSpanLabel>Followers</StatSpanLabel>
      <StatSpanQuantity>{stats.followers}</StatSpanQuantity>
    </StatList>
          <StatList>
            <StatSpanLabel>Views</StatSpanLabel>
            <StatSpanQuantity>{stats.views}</StatSpanQuantity>
    </StatList>
          <StatList>
            <StatSpanLabel>Likes</StatSpanLabel>
            <StatSpanQuantity>{stats.likes}</StatSpanQuantity>
    </StatList>
  </StatProfile>
            </ProfileWrap>
    );
}

Profile.propTypes = {
  userInfo: propTypes.exact({
    avatar: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.exact({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired
    })

})
};
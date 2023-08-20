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
import PropTypes from 'prop-types';

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
  userInfo: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    })

})
};
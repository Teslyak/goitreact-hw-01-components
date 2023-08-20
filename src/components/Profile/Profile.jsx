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
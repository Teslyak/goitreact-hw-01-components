import { Profile } from "./Profile/Profile";
import user from "../user.json"
import { RootStyle } from "./RootStyle/RootStyle.styled";
import { Wraper } from "./Profile/Profile.styled";


export const App = () => {
  return (
 <Wraper>
      
 
  <Profile userInfo={user} />
  <RootStyle></RootStyle>
  </Wraper>
  );
};

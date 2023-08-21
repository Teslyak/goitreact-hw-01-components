import { Profile } from "./Profile/Profile";
import user from "../user.json";
import { RootStyle } from "./RootStyle/RootStyle.styled";
import { Wraper } from "./Profile/Profile.styled";
import { Statistics } from "./Statistics/Statistics";
import data from "../data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "../friends.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json"

export const App = () => {
  return (
 <Wraper>
    <Profile userInfo={user} />
      <Statistics statTittle="Upload stats" statInfo={data} />
      <FriendList friendsData={friends} />
      <TransactionHistory transactions={transactions} />
  <RootStyle></RootStyle>
  </Wraper>
  );
};

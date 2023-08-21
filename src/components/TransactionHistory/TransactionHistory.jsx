import { Table, Tbody, Th, Thead, Trow } from "./TransactionHistory.styled"
import { TrHistoryItem } from "./TransactionHistoryItem"
import propTypes from 'prop-types';
export const TransactionHistory = (props) => {
    return (
<Table>
            <Thead>
                <Trow>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </Trow>
            </Thead>
 <Tbody>
<TrHistoryItem trData={props.transactions} />
</Tbody>


</Table>

 )
}

TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};
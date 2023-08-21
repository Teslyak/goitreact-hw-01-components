import { Table, Tbody, Th, Thead, Trow } from "./TransactionHistory.styled"
import { TrHistoryItem } from "./TransactionHistoryItem"

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
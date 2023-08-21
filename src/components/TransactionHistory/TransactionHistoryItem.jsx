import { DataItem, RowItem } from "./TransactionHistoryItem.styled"

export const TrHistoryItem = (props) => {
   
    return (
        props.trData.map(({ id, type, currency, amount }) => {
            return ( 
        <RowItem key={id}>
           <DataItem>{type}</DataItem> 
           <DataItem>{amount}</DataItem> 
           <DataItem>{currency}</DataItem>          
        </RowItem>
    )
        })
)
}
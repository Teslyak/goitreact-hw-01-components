// import { PropTypes } from "prop-types";

import { Section, StatLisItem, StatList, Tittle } from "./Statistics.styled";

export const Statistics = (props) => {
    return (
<Section>
            <Tittle>{props.statTittle}</Tittle>
    <StatList>
    {props.statInfo.map(el => {
        return (
        <StatLisItem key={el.id}>
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}%</span>
       </StatLisItem>
    )
})}
    </StatList>
</Section>)
};

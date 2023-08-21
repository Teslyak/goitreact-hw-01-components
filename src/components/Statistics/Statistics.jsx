import propTypes  from "prop-types";

import { Section, StatLisItem, StatList, Tittle } from "./Statistics.styled";

export const Statistics = (props) => {
    return (
<Section>
            <Tittle>{props.statTittle}</Tittle>
    <StatList>
    {props.statInfo.map(el => {
        return (
        <StatLisItem key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
       </StatLisItem>
    )
})}
    </StatList>
</Section>)
};

Statistics.propTypes = {
    statTittle: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        })
    )
}
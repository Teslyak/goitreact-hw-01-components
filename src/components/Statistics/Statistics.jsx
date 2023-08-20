import { PropTypes } from "prop-types";

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
    statTittle: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
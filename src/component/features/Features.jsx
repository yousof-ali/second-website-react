import { FaRegHandPointRight } from "react-icons/fa";
import PropTypes from "prop-types"

const Features = ({feature}) => {
    return (
       <li className="list-none flex items-center gap-2" ><FaRegHandPointRight />{feature}</li>
    );
};

Features.propTypes ={
    feature: PropTypes.string
}
export default Features;
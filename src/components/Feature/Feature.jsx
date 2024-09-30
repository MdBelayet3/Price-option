import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-3 ml-8 mb-2 flex-grow'>
            <FaCheckCircle className='text-green-600' /><p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
};

export default Feature;
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, features, price } = option;
    return (
        <div className='bg-blue-800 rounded-xl text-white p-5 flex flex-col'>
            <h2 className='text-2xl text-center'><span className='text-5xl'>{price}</span>/mon</h2>
            <h4 className='text-3xl text-center my-4'>{name}</h4>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <div className='px-10 mt-7'>
                <button className='bg-green-400 rounded-md py-3 text-center w-full hover:bg-green-900 '>Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {

};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;
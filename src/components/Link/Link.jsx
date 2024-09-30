import PropTypes from 'prop-types';

const Link = ({ route }) => {
    console.log(route);
    console.log(route.path
    );

    return (
        <li className="mr-6 p-2 m-1 rounded-2xl bg-yellow-100 hover:bg-white"><a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object,
};

export default Link;
import PropTypes from 'prop-types';
const Link = ({route}) => {
    const {name,path}=route;
    return (
        <li className="mr-6 font-semibold hover:bg-slate-200 p-2 rounded-xl"><a href={path}>{name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;
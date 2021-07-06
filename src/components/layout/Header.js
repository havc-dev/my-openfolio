import './Header.css';

const Header = (props) => {
    const { title, subtitle, location } = props;
    
    return (
        <div className="header">
            <h1 className="header-title">{title}</h1>
            {!subtitle ? null : <h2 className="header-subtitle">{subtitle}
            {!location ? null : <span className="subtitle-location"> {location}</span>}</h2>}
        </div>
    )
}

export default Header

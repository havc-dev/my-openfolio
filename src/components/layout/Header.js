const Header = (props) => {
    
    const { title, subtitle, location } = props;
    
    return (
        <>
            <h1 className="header-title">{title}</h1>
            {!subtitle ? null : <h2 className="header-subtitle">{subtitle}<br />
            {!location ? null : <span className="subtitle-location"> {location}</span>}</h2>}
        </>
    )
}

export default Header

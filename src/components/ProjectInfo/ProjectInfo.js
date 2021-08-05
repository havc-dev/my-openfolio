import './ProjectInfo.css';

const ProjectInfo = (props) => {

    const { description } = props;

    return (
        <>
            <div className="description">
                <h3 className="description-title">Description:</h3>
                <div className="description-container">
                    <p className="description-text">{description.p1}</p>
                    <br />
                    <p className="description-text">{description.p2}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo

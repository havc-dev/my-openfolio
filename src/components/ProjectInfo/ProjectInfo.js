import './ProjectInfo.css';

const ProjectInfo = (props) => {

    const { description } = props;

    return (
        <>
            <div className="description">
                <h4 className="description-title">Description:</h4>
                <div className="description-text">
                    <p>{description.p1}</p>
                    <br />
                    <p>{description.p2}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo

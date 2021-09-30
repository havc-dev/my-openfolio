const Skill = ({ skill, icon, index }) => {
  const classes = `skill-icon ${icon}`;

  return (
    <div className='skill-wrapper' key={index}>
      <i className={classes}></i>
      <p className='skill-text'>{skill}</p>
    </div>
  );
};

export default Skill;

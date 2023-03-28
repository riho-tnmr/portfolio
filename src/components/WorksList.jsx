import { Link } from 'react-router-dom';

const WorksList = ({ data }) => {
  return (
    <div className='works-lists'>
        {data.map((work) => {
            const { id, name, img1, skills } = work;
            return (
                <Link to={`works/${id}`} key={id} className='works-item'>
                    <img className='works-img' src={img1} alt={name} />
                    <h3 className='works-name'>{name}</h3>
                    <p className='works-skills'>
                        {skills.map((skill, i) => {
                            return <span key={i}>{skill}</span>
                        })}
                    </p>
                </Link>
            )
        })}
    </div>
  )
}
export default WorksList
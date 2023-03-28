import { useParams, Link } from "react-router-dom"
import { works, personalProjects } from '../assets/data/data';
import Contact from "../components/Contact";
//images
import githubIcon from '../assets/images/github-mark.svg';

const SingleWork = () => {
  const { id } = useParams();
  
  const data = () => {
    if(id.length === 1){
      return works.find((work) => work.id === id);
    }else{
      return personalProjects.find((work) => work.id === id);
    }
  }
  const { name, url, img1, img2, img3, scope, skills, duration, github } = data();

  const urlName = () => {
    if(url){
      return url.slice(8, -1);
    }
  }

  return (
    <>
    <section className="detail">
      <div className="container">
        <h1 className="detail-name">{name}</h1>
        <div className="detail-links">
          {urlName()
          ?
          <a href={url} target='_blank' className="detail-link">{urlName()}</a>
          :
          ''
          }
          {
            github &&  <a href={github} target='_blank' className="detail-github"><img className="github-icon" src={githubIcon} alt='github repository' /></a>
          }
        </div>
        <img className="detail-img1" src={img2 ? img2 : img1} alt={name} />
        <table className="detail-table">
          {scope && (
            <tr>
            <th>SCOPE</th>
            <td>{
              scope.map((value, i) => {
                return (
                  <>
                  {i === 0 ? <span key={i}>{value} </span> : <span key={i}> , {value}</span>}
                  </>
                )
              })
            }</td>
          </tr>
          )}
          <tr>
            <th>SKILLS</th>
            <td>{
              skills.map((value, i) => {
                return (
                  <>
                  {i === 0 ? <span key={i}>{value} </span> : <span key={i}> , {value}</span>}
                  </>
                )
              })
            }</td>
          </tr>
          {
            duration && (
              <>
              <tr>
                <th>DURATION</th>
                <td>{duration}</td>
              </tr>
              </>
            )
          }
        </table>
        {
          img3 && (
            <>
            <img src={img3} alt={name} className='detail-img2'/>
            </>
          )
        }
        <Link to='/' className="detail-btn">BACK</Link>
      </div>
    </section>
    <Contact/>
    </>

  )
}
export default SingleWork
import WorksList from "./WorksList"
import { useInView } from 'react-intersection-observer';

const Works = ({ data, title }) => {
  const[ ttlRef, inView] = useInView({
    rootMargin: '-50px', 
    triggerOnce: true, 
  })

  return (
    <section className={`works section ${title}`} id='works'>
        <div className="container">
            <h2 className="ttl">
                <span ref={ttlRef} className={inView && 'ttl-wave'}>{title}</span>
            </h2>
            <WorksList data={data}/>
        </div>
    </section>
  )
}
export default Works
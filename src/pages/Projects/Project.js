import './project.scss';
export default function Project(props) {
  return (
    <article className="project">
      <div className="img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="text">
        <div className='thech'>{props.techniques.map(el => el.includes("html") || el.includes("css") || el.includes("js") || el.includes("react") || el.includes("redux") ? <span className={el}>{el}</span> : null)}</div>
        <h1>{props.projectName}</h1>
        <p>{props.description}</p>
        <div className="project-link">
          <a href={props.sourceCode} target="_blank">sourceCode</a>
          <a href={props.liveDiom} target="_blank">Live Demo</a>
        </div>
      </div>
    </article >
  )
}
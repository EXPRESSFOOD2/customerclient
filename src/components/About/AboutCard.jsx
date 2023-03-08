
import style from "./AboutCard.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default  function AboutCard ({image, name, github, linkedin, description, title}){
  return(
    <div className={style.container}>
      <div className={style.containerImg}>
        <img className={style.img} src={image} alt={name}/>
      </div>
        <section className={style.dataSection}>
          <span>{name}</span>
          <h5>{title}</h5>
        </section>
        <section className={style.sectionLinks}>
          <a className={style.icons} href={github}><GitHubIcon /></a>
          <a className={style.icons} href={linkedin}><LinkedInIcon/></a>
        </section>
    </div>
    )
}
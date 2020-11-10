
const Meme=(template,onClick)=>{
    return(
        <>
         <img key={template.id} width="50%" height="300" src={template.url} alt={template.name} onClick={onClick}/>
        </>
    )
}
export default Meme;
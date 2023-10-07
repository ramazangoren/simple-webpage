import ImageItems from "./ImageItems";

const Images = (props)=>{
    return(<div>
        <ImageItems image={props.items[0].image} title={props.items[0].title} description={props.items[0].description}></ImageItems>
        <ImageItems image={props.items[1].image} title={props.items[1].title} description={props.items[1].description}></ImageItems>
        <ImageItems image={props.items[2].image} title={props.items[2].title} description={props.items[2].description}></ImageItems>
    </div>)
}


export default Images
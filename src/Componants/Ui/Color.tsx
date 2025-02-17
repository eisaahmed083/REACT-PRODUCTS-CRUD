interface Iprops{

    color:string;
    onClick:()=>void;

}

export default function Color({color,onClick,...rest}:Iprops){
    return(
        <>
        
        <span className="block w-5 h-5  rounded-full" style={{ backgroundColor: color }} onClick={onClick} {...rest}/>
        
        </>
    )
}
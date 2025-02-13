interface Iprops {
    imageSrc: string;
    imageAlt: string;
    imageClassName?: string;
    }

export default function Image({imageSrc,imageAlt,imageClassName}:Iprops) {
    return (
        <img src={imageSrc} alt={imageAlt} className={imageClassName} />
    )
}
import Image from "next/image";

interface props{
    imgurl:string;
    alt:string;
    value:string | number;
    title:string;
    textStyle:string;
    isAuthor?:boolean;
    href?:string;
}
const Metric = ({imgurl, alt, value, title, textStyle, href, isAuthor}: props) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-2">
           <Image src={imgurl} alt={alt} width={16} height={16}
           className={`object-contain ${href ? 'rounded-full':''}`}
           />
            <p className={`${textStyle} flex items-center gap-1}`}>
                {value}
                {title}
            </p>
        </div>
    );
};

export default Metric;
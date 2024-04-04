import Image from "next/image";
import Link from "next/link";

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
    const metricContedt = (
        <>
        
           <Image src={imgurl} alt={alt} width={16} height={16}
           className={`object-contain ${href ? 'rounded-full':''}`}
           />
            <p className={`${textStyle} flex items-center gap-1}`}>
                {value}
                <span className={`text-base line-clamp-1 ${isAuthor ?'max-sm:hidden':''}`}>{title}</span>
                
            </p>
        
        </>
    )
    if(href){
        return (
            <Link className="flex items-center justify-center" href={href}>
                {metricContedt}
            </Link>
        );
    }
    return (
        <div className="flex flex-wrap justify-center items-center gap-1">
        {metricContedt}
        </div>
    );
};

export default Metric;
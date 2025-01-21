import Link from "next/link";
import Image from "next/image";

export default function Card({src , title} :{src : string , title : string}) {
    return (
        <div className="text-center items-center">
            <Image src = {src} width={100} height={100} alt={title} className="rounded-b-xl"/>
            <div>{title}</div>
            <div><Link href="#">Click</Link></div>
        </div>
    )
}
import Image  from "next/image";
import Link from "next/link";

export default function Page() {  // ใช้คำสั่งnap
    return (
        <div>
            <h1 className="text-3xl text-center"> Page 2</h1>
            <Image src="/5555.jpg" width={300} height={300} alt="Cat"></Image> <br />
            <ul>
                <li className="border-2 hover:bg-red-800">
                <Link href = "\page1">Go to page1</Link></li> 
                <li className="border-2 hover:bg-red-800">
                <Link href = "\page2">Go to page2</Link></li> 
                <li className="border-2 hover:bg-red-800">
                <Link href = "\page3">Go to page3</Link> </li>


            </ul>

            
        </div>
    );
}
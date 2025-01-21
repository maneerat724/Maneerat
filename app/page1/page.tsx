import Image  from "next/image";
import Link from "next/link";

export default function Page() {  // ใช้คำสั่งnap
    return (
        <div>
            <h1 className="text-3xl text-center"> Page 1</h1>
            <Image src="/333.jpg" width={300} height={300} alt="Cat"></Image>

            <Link href = "\page1">Go to page1</Link> <br />
            <Link href = "\page2">Go to page2</Link> <br />
            <Link href = "\page3">Go to page3</Link> <br />
        </div>
    );
}
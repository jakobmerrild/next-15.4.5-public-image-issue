import Image from 'next/image';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <Image src="/us.png" alt="us flag" width={100} height={100} />
      <Image src="/potato.jpg" alt="potato" width={100} height={100} />
    </div>
  );
}

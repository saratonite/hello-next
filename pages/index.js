import Link from 'next/link'
import Hello from '../components/hello';

export default () =>(
    <div>
        <h1>Hello World !</h1>
        <Hello/>
        <Link href="/about"><a>About</a></Link>
    </div>
)
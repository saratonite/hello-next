import Link from 'next/link'
import Hello from '../components/hello'
import Layout from '../components/layout'

const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}><a>{props.title}</a></Link>
    </li>
)

export default () =>(
    <Layout>
    
        <Hello/>
        <ul>
            <PostLink title="hello-world"></PostLink>
            <PostLink title="Next.js"></PostLink>

        </ul>
    </Layout>
)
import Link from 'next/link'
import Hello from '../components/hello'
import Layout from '../components/layout'

const PostLink = (props) => (
    <li>
        <Link as={ `/p/${props.id}`} href={`/post?title=${props.title}`}><a>{props.title}</a></Link>
    </li>
)

export default () =>(
    <Layout>
    
        <Hello/>
        <ul>
            <PostLink id="hello-world" title="Hello World"></PostLink>
            <PostLink id="nextjs" title="Next.js"></PostLink>

        </ul>
    </Layout>
)
import Link from 'next/link'
import Hello from '../components/hello'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'


const PostLink = (props) => {
     

        return props.shows.map(({show},i) => (

            <li key={i}>
                <Link as={ `/p/${show.id}`} href={`/post?id=${ show.id }`}><a>{show.name}</a></Link>
                <style jsx>{`

                li {
                    list-style: none;
                     margin: 5px 0;
                }
                a {
                    text-decoration: none;
                    color: white;
                    font-size:1.3;
                }

                a:hover {
                    opacity: 0.6;
                }
                
        `}</style>
            </li>
           
            
        ))
    
   
}

const Index = (props) =>(
    <Layout>
    
        <Hello/>
        <ul>
            <PostLink shows={ props.shows }></PostLink>

        </ul>
        
        <style jsx>{`


            ul {
                padding: 10;
                margin:0;
                background: #f56;
            }
           

            
            `}</style>

    </Layout>
)

Index.getInitialProps = async function() {
    
    const res = await fetch('https://api.tvmaze.com/search/shows?q=marvel')

    const data = await res.json()

    console.log(`Show data fetched , Count : ${data.length}`)

    return {
        shows: data
    }
}

export default Index
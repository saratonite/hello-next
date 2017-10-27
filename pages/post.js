import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'


const Content =  ({show}) => (
    <div>
       <h1>{ show.name }</h1>
       <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={show.image.medium}/>
    </div>
)


const postPage = (props) => (
    <Layout>
        <Content show={props.show} />
    </Layout>
)

postPage.getInitialProps = async function(context) {

    const { id } = context.query

    const res = await  fetch(`https://api.tvmaze.com/shows/${id}`)

    const show = await res.json()

    console.log(`Fetched show : ${show.name}`)

    return {
        show
    }

}

export default postPage


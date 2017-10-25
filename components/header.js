import Link from 'next/link'

const layoutStyle = {
  padding: 20,
  borderBottom: '1px solid #DDD'
}

const linkStyle = {
    margin:"2px 5px",
    color:"#2196F3",
    textDecoration:"none",
    fontWeight: "bold"
}

export default ()=> (
    <div style={ layoutStyle }>
        <Link  href="/"><a style={ linkStyle }>HOME</a></Link>
        <Link  href="/about"><a style={ linkStyle }>ABOUT</a></Link>
    </div>
)

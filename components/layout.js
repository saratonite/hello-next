import Header from './header'

const layoutStyle = {
    border: " 1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    minHeight:"100vh"
}

const layout = (props) => (
    <div style={ layoutStyle }>
        <Header/>
        <div style={{"flexGrow":1, padding:5}}>
            { props.children }
        </div>
        
    </div>
   
)

export default layout;
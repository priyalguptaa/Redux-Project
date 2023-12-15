import {connect} from 'react-redux'
import Home from "../Componenets/Home";
import {addToCart} from '../Services/Actions/action'

const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({
    addToCartHandler:data=>dispatch(addToCart(data))

    // thi function calls in react component
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;
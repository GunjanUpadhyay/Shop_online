import  {Link} from 'react-router-dom';
import ProductCard from '../components/product-card';
import img1 from '../assets/img1.jpg'

const Home = () => {
  const addToCartHandler=()=>{};
  return (
    <div className="home">
      <section>

      </section>

      <h1>Latest Products
      <Link to='/search' className='findmore'>More</Link>
      </h1>

      <main>
        <ProductCard productId='nfknk' name='nvkhri' price={536728} stock={4567} handler={addToCartHandler} photo={img1}/>
      </main>
    </div>
  )
}

export default Home
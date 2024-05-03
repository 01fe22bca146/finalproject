import React, {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import ProductScreen from "./productscreen"
import {listProducts} from '../actions/productActions'
import Loader from '../components/shared/Loader'
import Message from '../components/shared/Message'

const Homescreen = () => {
    const dispatch=useDispatch();
const productList= useSelector(state=>state.productList);
const {Loading,error,products} =productList;
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch]) 
  return (
    <>
    {
      Loading ? <Loader/> : error ? <Message variant="danger">{error}</Message>:
    <Row>
          {products.map((product) => (
            <Col key={product._id} md={3} >
               <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
        }
    </>
  )
}

export default Homescreen
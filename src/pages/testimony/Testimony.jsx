import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewsCard from '../shop/reviews/ReviewsCard';
import { useFetchProductByIdQuery } from '../../redux/features/products/productsApi';
import {useDispatch} from "react-redux"
import bannerImg from "../../assets/ABC/comment.png"



const Testimony = () => {
     const {id} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const dispatch =  useDispatch();
    const {data, error, isLoading} = useFetchProductByIdQuery(id);
   
    const singleProduct = data?.product || {};

    const productReviews = data?.reviews || [];

    const fetchReviews = async () => {
        try {
            const response = await axios.get('/api/reviews');
            if (Array.isArray(response.data)) {
                setReviews(response.data);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>What People Say about Us</h2>
                <div className='section__subheader space-x-2'>
                    <span className='hover:text-primary'><Link to="/">home</Link></span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-primary'><Link to="/shop">shop</Link></span>
                    <i className="ri-arrow-right-s-line"></i>
                </div>
            </section>

            <section className='section__container'>
                <h3 className='section__header'>Customer Reviews</h3>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review._id} className='p-4 bg-gray-100 rounded mb-4'>
                            <p><strong>Rating:</strong> {review.rating} / 5</p>
                            <p><strong>Comment:</strong> {review.comment}</p>
                        </div>
                    ))
            
                ) : (
                    <p></p>

                    
                    
                )}

             <div>
            <img src={bannerImg} alt='banner image'/>
            </div>



            </section>
            {/* display Reviews */} 
            <section className='section__container mt-8'>
                <ReviewsCard productReviews = {productReviews}/>
            </section>
        </>
    );
};

export default Testimony;

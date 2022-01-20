import React from 'react';
import './Blog.scss'
import {useForm} from "react-hook-form";


const Blog = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className={'wrapper'}>
            <div className={'blog_wrapper'}>
                <h1 data-aos="flip-left" data-aos-duration="3000">BLOG</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First name" {...register("First name", {required: true, max: 20, min: 3, maxLength: 80, pattern: /^[A-Za-z]+$/i})} />
                    <input type="text" placeholder="Last name" {...register("Last name", {required: true, max: 20, min: 3, maxLength: 20, pattern: /^[A-Za-z]+$/i})} />
                    <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} />
                    <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, maxLength: 12})} />
                    <input type="text" placeholder="Subject" {...register("Subject", {max: 100, min: 3, maxLength: 100})} />

                    <input type="submit" />
                    </form>
        </div>


    )
};

export default Blog;
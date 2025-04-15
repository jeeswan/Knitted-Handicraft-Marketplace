import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.AboutUs} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to WeaveLeaf, your destination for handcrafted, eco-friendly woven and crocheted products designed with love and creativity. At WeaveLeaf, we believe in the beauty of handmade artistry and the warmth it brings to everyday life. Our collection features intricately designed, high-quality items that add charm and elegance to your home. Whether you're looking for cozy coasters, adorable animal-themed accessories, or beautifully crafted home décor, each piece is made with sustainable materials, ensuring an eco-conscious shopping experience.</p>
          <p>Our passion lies in preserving traditional weaving and crochet techniques while adding a modern touch to every creation. Every item in our collection is a result of meticulous craftsmanship, dedication, and a love for artistry. We take pride in offering unique, durable, and ethically made products that tell a story of patience and skill. Join us in embracing slow fashion and handmade excellence—because every stitch matters!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At WeaveLeaf, our mission is to create beautifully handcrafted, eco-friendly woven and crocheted products that bring warmth, charm, and sustainability into everyday life. We are committed to preserving traditional craftsmanship while embracing modern design, ensuring that every piece is made with love, care, and ethically sourced materials. Through our creations, we aim to inspire a deeper appreciation for handmade artistry and promote a more sustainable way of living.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Ouality Assurance:</b>
          <p className='text-gray-600'>We ensure each handcrafted product meets the highest standards of durability, functionality, and eco-friendly craftsmanship.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our seamless online shopping experience, secure payments, and fast shipping make it easy to enjoy our handcrafted products.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>We are committed to providing personalized support, prompt responses, and a hassle-free shopping experience for every customer.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About

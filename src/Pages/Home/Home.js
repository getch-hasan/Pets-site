import React from 'react';
import img1 from '../../assets/cat/cat1.jpeg'
import img2 from '../../assets/cat/cat2.jpg'
import banner from '../../assets/cat/Banner2.jpg'
import img3 from '../../assets/cat/cat3.jpg'
import { Link } from 'react-router-dom';
import People from './People';
const Home = () => {
    const cats = [{
        name: 'Siamese cat',
        description: 'Siamese cats are almost as famous for their personality as they are for their looks',
        img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSTkG18MNcdgf52ZpQmPS6oGY4KKCKJ5ecRNfGlpEhrSS0xeWsSqVVrmhtvMsIqESfwwO4FHrvOOVMBApk'
    },
    {

        description: 'Bulldogs can be traced back all the way to the 13th century in England. ',
        name: "Bulldog",


        img: "https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg",

    },
    {
        name: 'Persian cat',
        description: 'Is it safe to pet Persian cat Persian cats are excellent family pets and are good with children and other pets.',
        img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS_Eb_cKokdVJe5lwK20IgY09F36nxDgSu7AeV8e5czUbDPKHu6elu9t-X1dfshekF1MczTbYaP0gHHu3Q'
    }]
    const peoples = [
        {
            _id: 1,
            img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS2yCTSl4jxrRgdAa_7ron5792IkrWZyY53AdUQU6zeAPO98UsPJ4_i8e1uqT4jxSa9kZf7p61yhyQwSo8',
            name: 'Sakib Al Hasan',
            description: 'Cats are very beautiful and friendly animals. They are very good at hunting rats and snakes. Cats have two eyes, a tiny nose, two perky ears, four legs and a tail.'
        },
        {
            _id: 2,
            img: 'https://yt3.googleusercontent.com/6rFf7GQqCrmO6CXKohNnd2qSvEy58bu3ifAorWLV6V-xh0SwDCoIRRxYYINZvzqs6w2xx_6N0e4=s900-c-k-c0x00ffffff-no-rj',
            name: 'Aiman Sadik',
            description: 'Cats are very beautiful and friendly animals. They are very good at hunting rats and snakes. Cats have two eyes, a tiny nose, two perky ears, four legs and a tail.'
        },
        {
            _id: 3,
            img: 'https://media.licdn.com/dms/image/C5603AQGPVJdK0DNCWA/profile-displayphoto-shrink_800_800/0/1643913840352?e=2147483647&v=beta&t=QTvQ0qrtmg9eIiVMTxhs4KJAJGSzi9axjnL92QCqozs',
            name: 'Khalid Farhan',
            description: 'Cats are very beautiful and friendly animals. They are very good at hunting rats and snakes. Cats have two eyes, a tiny nose, two perky ears, four legs and a tail.'
        },
    ]
    return (
        <div>
            <div>
                <img className='w-screen' src={banner} alt="" />
            </div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <img src={img3} className="ms-10 max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className=" text-5xl text-cyan-400  font-bold">Love Your Pet❤️</h1>
                        <p className="py-6">Don't heart a cat.Its have a life.If you don't like it  please transfer it to other who love cat</p>
                        <button className="btn btn-primary font-bold "> <Link to={'/cat'}> Get Started</Link> </button>
                    </div>
                </div>

            </div>
            <div className=' bg-base-300'>
                <h1 className='mt-10 text-2xl font-bold text-cyan-400 '>About different Pets</h1>
                <div className='grid grid-cols-3 gap-3  '>
                    {
                        cats.map(cat => <div className=''>
                            <div class="card w-96 bg-base-100 shadow-xl max-h-96 ms-8 mt-10 ">
                                <div class="card-body">
                                    <h2 class="card-title">{cat.name}</h2>
                                    <p>{cat.description}</p>
                                </div>
                                <figure><img className='h-64 w-full' src={cat.img} alt="Shoes" /></figure>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div>
                <h1 className='mt-10 text-2xl font-bold text-cyan-400'>What experts says about us</h1>

                <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-[100px]'>
                    {
                        peoples.map(people => <People
                            key={people._id}
                            people={people}
                        ></People>)

                    }

                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react'
import '../style/Home1.css'
import Image from 'next/image'
import { FaTwitter, FaYoutube, FaFacebook, FaAmazon } from 'react-icons/fa';


const Home1 = () => {
  
    return (
        <>
            <main className='home1'>
                <h1>TechyStar</h1>
                <p>Solution Your All Problems</p>
            </main>
            <div className="home">
                <Image
                    src={"/2.webp"}
                    width={1100}
                    height={1000}
                    alt='this is image'
                />
                <div>
                    <p> We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.</p>
                </div>
            </div>
            <div className="home3">
                <div>
                    <h1>Who Are You?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                        officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
                        quis officiis fugit sunt dolores nostrum tenetur iusto est odio
                        mollitia. Dolor placeat repellendus officia aspernatur dolorum
                        harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
                        quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
                        voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
                        ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
                        aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
                        nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
                        similique maxime praesentium sunt unde necessitatibus voluptates
                        ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
                        qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
                        sed cumque corporis voluptate quibusdam nostrum quod saepe
                    </p>
                </div>
            </div>
            <div className="home4">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div>
                      
                         <FaTwitter/>
                         <p>Twitter</p>
                        </div>
                        <div>
                     
                         <FaYoutube/>
                         <p>Youtube</p>
                        </div>
                        <div>
                
                         <FaFacebook/>
                         <p>Facebook</p>
                        </div>
                        <div>
                      
                         <FaAmazon/>
                         <p>Amazon</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home1

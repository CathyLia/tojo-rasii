
import axios from 'axios';
import React, { useState } from 'react'

// axios.get('http:/')
// .then(response =>{
//     //Handle the response data
//     console.log(response.data);
// })
// .catch(error =>{
//     //Handle any errors
//     console.error(error);
// });

function Footer_home() {
    // const [inputValue, setInputValue]= useState('');

    // const handleSubmit = (e) =>{
    //     e.preventDefault();//Prevent the default form submission behavior
    //     //handle your form submision logic here, eg, sending data to an API 
    //     console.log(inputValue)
    // }

    // const handleInputChange = (e) =>{
    //     setInputValue(e.target.value);
    // }
    return (
      <div>
        <main className="Footer-contact shadow-sm rounded-1 p-4 mb-3">
         <h2>Contact</h2>
         <section className='d-flex flex-row-reverse justify-content-between ' id='contact'>
            <article>
            <footer className='d-flex justify-content-center mb-5'>
            <section className='mt-5 ms-5 d-flex flex-column'>
                <article className='text-center'>
                    <picture className='d-flex flex-row gap-2 stars'>
                        <i className='bi-star-fill fs-5 text-warning'></i>
                        <i className='bi-star-fill fs-5 text-warning'></i>
                        <i className='bi-star-fill fs-5 text-warning'></i>
                    </picture>
                    <p className='text-gris fw-semibold mt-2 w-75'>N'oubliez pas de me laisser quelques message en donnant votre avis</p>
                </article>
                <article className='Formulaire'>
                    {/* <form onSubmit={handleSubmit}> */}
                        <label htmlFor="">Nom</label><br />
                        {/* <input type="text" name='name' value={inputValue} onChange={handleInputChange} className='p-3 rounded-1 w-75 mt-1 shadow-sm'/><br /> */}
                        <input type="text" name='name'className='p-3 rounded-1 w-75 mt-1 shadow-sm'/><br />
                        <label htmlFor="" className='mt-2'>Prenom</label><br />
                        <input type="text" name='firstname' className='p-3 rounded-1 w-75 mt-1 shadow-sm'/><br />
                        <label htmlFor="" className='mt-2'>Email</label><br />
                        <input type="email" name='address' className='p-3 rounded-1 w-75 mt-1 shadow-sm'/><br />
                        <label htmlFor="" className='mt-2'>Message</label><br />
                        <textarea name='message'  className='p-3 rounded-1 w-75 mt-1 shadow-sm'></textarea><br />
                        &nbsp;<input type="submit" value="Envoyer" className='btn btn-primary ms-5 mt-2 p-3 w-50 rounded-1 fw-semibold
                        '/>
                        <p className='value'></p>
                    {/* </form> */}
                </article>
            </section>
        </footer>
            </article>
            <article>
                <ul className='d-flex flex-column gap-4 ul-contact'>
                    <li><i className='bi-github fs-2'></i>&nbsp; Tojo_Rasii</li>
                    <li><i className='bi-linkedin fs-2 text-primary-emphasis'></i>&nbsp; Tojo RASAMIMANANA</li>
                    <li><i className='bi-twitter fs-2 text-info'></i>&nbsp; Tojo "The emperor" Rasii</li>
                    <li><i className='bi-facebook fs-2 text-primary'></i>&nbsp; Tojo RASAMIMANANA</li>
                </ul>
            </article>
         </section>
         </main>
      </div>
    )
  }

export default Footer_home

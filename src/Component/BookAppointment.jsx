import React from 'react'
import newlab2 from "../assets/newlab2.jpg";
import NavigationB from './NavigationB';

const BookAppointment = () => {
    return (
        <>
            {/* <NavigationB/> */}
            <div className='text-center pt-20'>
                {/* <div className='bg-amber-100 p-4 m-3 text-center'>
            </div> */}
            
                <div class="lg:flex-grow mt-3 text-center m-auto md:w-4/5 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center">
                    <h1 class="title-font text-center m-auto sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Vandana Bansal
                    </h1>
                    <p class="mb-8 text-center leading-relaxed">DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration.</p>
                </div>
                <div className='m-auto bg-amber-100 w-fit mb-2 p-1'> <span className='mb-2'>Book Your Appointment - </span>
                    <div class="relative inline-flex">
                        <button
                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl py-3 px-6 rounded-lg bg-gray-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">

                            6390103002                    </button>
                        <span
                            class="absolute min-w-[25px] min-h-[25                              px] rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-rose-700 text-white">
                        </span>
                    </div>
                </div>
                <div className='m-auto w-4/5 h-ful mb-11'>
                    <img
                        class="border-4 w-full mb-10 border-rose-100 object-cover object-center rounded-2xl md:rounded-3xl"
                        alt="hero"
                        src={newlab2}
                    />
                </div>
                <div className='mx-40 my-8 flex justify-center'>
                    {/* <div className='ms-5 text-left'>
                        <h1 className='font-bold text-3xl mb-3'>Expertise</h1>
                        <ul>
                            <li type='circle'>Comprehensive Eye Exams</li>
                            <li type='circle'>Cataract Surgery</li>
                            <li type='circle'>LASIK and Refractive Surgery</li>
                            <li type='circle'>Glaucoma Management</li>
                            <li type='circle'>Pediatric Ophthalmology</li>
                            <li type='circle'>Treatment of Macular Degeneration</li>
                            <li type='circle'>Diabetic Eye Care</li>
                        </ul>
                    </div> */}
                    <div className='ms-5 text-left'>
                        <h1 className='font-bold text-3xl mb-3'>Achievements</h1>
                        <ul>
                            <li type='circle'>
                                🏆  First IVF Triplet Baby of Allahabad 7 February 2002
                            </li>
                            <li type='circle'>
                                🏆  First Test Tube Baby of Allahabad 27 November 2000
                            </li>
                            <li type='circle'>
                                🏆 First Blastocyst transfer of Allahabad 20 August 2007 </li>
                            <li type='circle'>
                                🏆First Frozen Embryo Transfer (vitrification) Baby of Allahabad 23 June 2008
                            </li>
                            <li type='circle'>
                                🏆 First Surrogate mother delivered baby in Allahabad on 18 April 2008
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookAppointment
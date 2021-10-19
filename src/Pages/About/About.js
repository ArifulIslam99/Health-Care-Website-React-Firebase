import React from 'react';

const About = () => {
    return (
        <div className="p-3" style={{backgroundColor:'lightgray'}} > 
            <h1 className="pt-5 fw-bold">About US</h1>
            <div  className="row p-5">
            <div className="col-lg-6 my-5">
                <img className='rounded-3 img-fluid' src="https://image.freepik.com/free-vector/hospital-clinic-building-with-ambulance-car-truck_107791-2645.jpg" alt="" />
            </div> 
            <div className="col-lg-6 my-5">
                <h2>Who We are ?</h2>
                <p>  Mahmuda Optikal is the leader in eye care delivery system being at the forefront of vision care technology revolution having state of the art specialized ophthalmic care, US-FDA/CE approved technologies, diagnostics, treatment and surgery with one-stop mall for eye care products.

Mahmuda Optikal is renowned for blending traditional hospitality with state-of-the-art ophthalmic care. Offering specialized treatment, we are the first choice of local and international patients and important celebrities alike. Mahmuda Optikal has been swiftly moving towards its goal of achieving excellence by providing equitable and efficient eye care for everyone.

</p>
            </div>
            </div> 

            <div className="row p-5 ">
                <div className="col-lg-6 my-5">
                    <h2>Our History</h2>
                    <p> 
Mahmuda Optikal, the leading eye care provider in Bangladesh was established in 1999 under the guidance of the eminent ophthalmologist Dr. Mahmuda Akhter, which focuses primarily on quality eye care by the highly skilled eye doctors equiped with cutting edge technology.

Our corporate social responsibility has fulfilled the hopes of better vision and eye care to many economically under- privileged patients. Our Free School Sight Testing Program has saved thousands of school children from developing lazy eye.

We provide specialized eye care, honest clinical opinion and latest technology to all who enter our portals. With these principles always in our mind, we hope to continue serving our patients with eye ailments to the best of our ability and live up to the reputation of being a leading provider of quality eye care.</p>
                </div>
                <div className="col-lg-6 my-5">
                     <img className='rounded-3 img-fluid' src="https://image.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
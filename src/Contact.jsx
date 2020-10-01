import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Createnote.css';

const Contact = () => {

    const [data,setdata] = useState({
        fullname : "",
        phone: "",
        email: "",
        msg: "",

    })

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setdata((preVal)=>
        {
            return{
                    ...preVal,
                    [name]:value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`
                My Name is ${data.fullname}.My mobile number is ${data.phone}. and Email is ${data.email}, Here is What i want to say ${data.msg}
        `);

    }



    return(
        <>
        
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit} className="row g-3">
                            <div className="col-md-6">
                                <label  className="form-label edit font-weight-bold">Full Name</label>
                                <input name="fullname" value={data.fullname} onChange={InputEvent} type="text" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="col-md-6">
                                <label  className="form-label edit font-weight-bold">Phone</label>
                                <input name="phone" value={data.phone} onChange={InputEvent} type="number" className="form-control" id="inputPassword4"/>
                            </div>
                            <div className="col-12">
                                <label  className="form-label edit font-weight-bold">Email Address</label>
                                <input name="email" value={data.email} onChange={InputEvent} type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="col-12">
                            <label  className="form-label edit ">Message</label>
                            <textarea name="msg" value={data.msg} onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary btn-lg">Submit form</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>



















            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            

        </>
    )
}

export default Contact;
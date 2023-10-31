import {  useState } from "react"
import {IoCheckmarkCircle} from "react-icons/io5"
import deskImg from "../assets/images/illustration-sign-up-desktop.svg"
import { Form } from "react-bootstrap"
import "../App.css"
// import { useEmailContext } from "../context/emailContext"
import SuccessModal from "./SuccessModal"
import { toast } from "react-toastify"

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [emailDisplay, setEmailDisplay] = useState(false)


    const handleSubmit = () => {
        try{
            if(!email) {
                toast.error("Please enter your email address", {position: "bottom-left"})
            }else{
                setEmailDisplay(true)
            }
        }catch(err){
            console.log("Error in submitting", err)
        }
    }

  return (
    <>
    <div className="p-3 rounded">
       <div className="home-container d-flex gap-5 jusstify-content-center align-items-center  p-3 rounded">
        <div>
            <h2>Stay updated</h2>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div>
                <div className="d-flex gap-3">
                    <IoCheckmarkCircle color="red" />
                    <p>Product discovery and building what matters</p>
                </div>
                <div className="d-flex gap-3">
                    <IoCheckmarkCircle color="red" />
                    <p>Measuring to ensure updates are a success</p>
                </div>
                <div className="d-flex gap-3">
                    <IoCheckmarkCircle color="red"/>
                    <p>And much more!</p>
                </div>
            </div>
            <div>
                <label>Email address</label>
                <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@company.com"/>
            </div>
            <div>
                <button className="btn btn-dark" onClick={handleSubmit}>Subscribe to monthly newsletter</button>
            </div>
        </div>
        <div>
            <img src={deskImg} alt="" className="w-100"/>
        </div>
    </div> 
    </div>
    <SuccessModal email={email} setEmail={setEmail} emailDisplay={emailDisplay} setEmailDisplay={setEmailDisplay}/>
    </>
    
  )
}

export default HomePage
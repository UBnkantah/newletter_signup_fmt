import {Modal, Button} from "react-bootstrap"
import {IoCheckmarkCircle} from "react-icons/io5"

const SuccessModal = ({email, setEmail, emailDisplay, setEmailDisplay}) => {

    const handleDismiss = () => {
        try {
            setEmail("")
            setEmailDisplay(false)
        } catch (error) {
            console.log("An error occurred", error)
        }
    }

  return (
    <Modal show={emailDisplay} onHide={() => setEmailDisplay(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <IoCheckmarkCircle color="red" size={50}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Thanks for Subscribing</h3>
            <p>
                A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription
            </p>
            <button className="btn btn-danger w-100" onClick={handleDismiss}>Dismiss</button>
            </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setEmailDisplay(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setEmailDisplay(false)}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
  )
}

export default SuccessModal
import React , {useState,useEffect} from 'react'
import './projects.css'
import './SingleProject.css'
import {Button , Modal} from 'react-bootstrap'



function SingleProject({img,imgHover}) {
 
const [openModal , setOpenModal] = useState(false)


const changeProjectPhoto = (e) => {
    setTimeout(()=>{
        e.target.src = imgHover

    },10)
}
const changeProjectPhoto2 = (e) => {
    e.target.src = img
}

const handleModal = () => {
    setOpenModal(!openModal)
}





    return (
        <div>
            <modal/>
         <img  onClick={handleModal}  onMouseLeave={changeProjectPhoto2} onMouseEnter={((e)=>{
                  changeProjectPhoto(e)          
           })} className="project-image" src={img} alt=""/>
        <Modal class="modal-sm"  show={openModal}>
            <Modal.Body class="modal-xl" >
                <img style={{width:'100%'}} src={img} alt=""/>
            </Modal.Body>
            <Modal.Footer style={{justifyContent:'space-between'}}>
              <div>
                <button class="btn- btn btn-primary"  onClick={(()=>{handleModal()})}>
                    CODE
                </button>
                <button class="btn- btn btn-primary"  onClick={(()=>{handleModal()})}>
                    DEMO
                </button>
              </div>
                <button class=" btn btn-danger"  onClick={(()=>{handleModal()})}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>




        </div>
    )
}

export default SingleProject

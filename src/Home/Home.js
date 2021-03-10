import React,{useContext, useState, useEffect} from 'react'
import './Home.css';
import Logs from '../Logs/Logs';
import Modal from '../Modal/Modal';
import Search from './Search/Search';
import LogForm from '../LogForm/LogForm';
import TechList from '../TechList/TechList';
import TechForm from '../TechForm/TechForm';
import newTechImg from '../assets/newTech.png';
import technicianImg from '../assets/technations.png';
import IT_LoggerContext from '../context/IT-Logger/IT-LoggerContext';


//rafce
const Home = (props) => {
    const [isModal, setisModal] = useState({value:false, child:'Home-new-log'});
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [attention, setAttention] = useState('');
    const [technician, setTechnician] = useState(null);
    const [isEdit, setIsEdit] = useState({value:false, logID:null})

    const itLoggerConext = useContext(IT_LoggerContext);

    useEffect(() => {
        const logs = localStorage.getItem('logs');
        const technicians = localStorage.getItem('technicians');
        if (logs) {
            itLoggerConext.setLogs(JSON.parse(logs));
        }
        if (technicians) {
            itLoggerConext.setTechnicians(JSON.parse(technicians));
        }
        // eslint-disable-next-line
      },[])

      const handleNewLogClicked = (e) =>{
        if (e.target.className.includes('Home-new-log')) {
            setisModal({
                value:true,
                child:'Home-new-log'
            })
        }
      }

      const handleNewTechClicked = (e) =>{
        if (e.target.className.includes('Home-new-tech')) {
            setisModal({
                value:true,
                child:'Home-new-tech'
            })
        } 
      }

      const handleShowTechClicked = (e) =>{
        if (e.target.className.includes('Home-show-tech')) {
            setisModal({
                value:true,
                child:'Home-show-tech'
            })
        } 
      }

      let child = null;
      let responseElem = null;
      if (response.length !== 0) {
          responseElem = <h2 className="Home-main-response">{response}</h2>
      }

      switch (isModal.child) {
        case 'Home-new-log':
            child =(
                <LogForm 
                    isModal = {isModal} 
                    setisModal = {setisModal}
                    setMessage = {setMessage}
                    setAttention = {setAttention}
                    setTechnician = {setTechnician}
                    setIsEdit = {setIsEdit}
                    setResponse = {setResponse}
                    message = {message}
                    response = {response}
                    attention = {attention}
                    technician = {technician}
                    isEdit = {isEdit}
                />
            ) 
        break;

        case 'Home-new-tech':
            child = (
                <TechForm
                    isModal = {isModal} 
                    response = {response}
                    setisModal = {setisModal}
                    setResponse = {setResponse}
                />
            )
        break;

        case 'Home-show-tech':
            child = (
                <TechList
                    isModal = {isModal} 
                    setisModal = {setisModal}
                    
                />
            )
        break;
      
        default:
            break;
      }

    return (
        <div className="Home">
            <Modal isModal = {isModal} setisModal = {setisModal}>
                {child}
            </Modal>
            
            <div className="Home-main">
                <Search/>
                {responseElem}
                <Logs 
                    isModal = {isModal} 
                    setisModal = {setisModal}
                    setMessage = {setMessage}
                    setAttention = {setAttention}
                    setTechnician = {setTechnician}
                    setIsEdit = {setIsEdit}
                    message = {message}
                    attention = {attention}
                    technician = {technician}
                    isEdit = {isEdit}
                />
            </div>
            <div className="home-buttons">
                <div className="Home-button Home-new-log" onClick={handleNewLogClicked}>
                    <span className="Home-new-log">+</span> 
                    <div className="hidden-buttons">
                        <div className="Home-button Home-new-tech" onClick={handleNewTechClicked}>
                            <img src={newTechImg} alt="newTechImg"/>
                        </div>
                        <div className="Home-button Home-show-tech" onClick={handleShowTechClicked}>
                            <img src={technicianImg} alt="technicianImg"/>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}


export default Home

import React,{useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux';
import {updateLog} from '../../actions/logActions'
import PropTypes from 'prop-types'
import TechSelectOptions from '../Techs/TechSelectOptions';

const EditLogModal = ({updateLog,current}) => {
    const [message,setMsg] = useState('');
    const [attention,setAttention] = useState(false);
    const [tech,setTech] = useState('');

    useEffect(() => {
        if(current){
            console.log(current,'c')
            setMsg(current.message);
            setAttention(current.attention);
            setTech(current.tech)
        }
    },[current])

    const onSubmit = () => {
        if(message === ''||message.trim() === ''||tech ===''){
            M.toast({html: 'Please enter a message and tech'})
        }else{
            const updtLog = {
                id:current.id,
                message,
                attention,
                tech,
                date: new Date()
            }
            updateLog(updtLog)
            M.toast({html: `Log update by ${tech}`})
            setMsg('');
            setTech('');
            setAttention(false)
        }
    }
    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>

                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name='message' 
                            value={message}
                            onChange={e =>setMsg(e.target.value)}
                        />
                        
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select 
                            name="tech" 
                            value={tech} 
                            className='browser-default'
                            onChange ={e=>{
                                console.log('-------')
                                setTech(e.target.value)}}
                        >
                         <option value="" disabled>select technician</option>
                         <TechSelectOptions />  
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                          <label>
                            <input 
                                type="checkbox" 
                                className='filled-in' 
                                checked={attention}
                                value={attention}
                                onChange ={e=> setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                          </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!"
                onClick={onSubmit}
                className='modal-close waves-effect blue waves-green btn'
                >
                    Enter
                </a>
            </div>
        </div>
    )
}

EditLogModal.propTypes = {
    current : PropTypes.object,
    updateLog: PropTypes.func.isRequired,
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps,{updateLog})(EditLogModal)
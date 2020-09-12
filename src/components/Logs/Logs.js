import React,{useEffect} from 'react'
import LogItems from './LogItems';
import { PreLoader } from '../Layout/PreLoader';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logActions'

const Logs = ({log:{logs,loading},getLogs}) => {

    useEffect(()=>{
        getLogs();
    },[])

    if(loading || logs === null){
        return <PreLoader />
    }
    console.log(logs)
    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className='center'>No logs to show</p>):(
                logs.map(log => <LogItems key={log.id} log={log}/>)
            )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps,{getLogs})(Logs);
import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import TimeoutService from './service/TimeoutService';

const timeoutService = new TimeoutService();

const IdleTimeout = ({ children }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            timeoutService.handleTimeout(setModalIsOpen);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleEvents = () => {
        timeoutService.resetTimeout();
    };

    const handleClickYes = () => {
        timeoutService.resetTimeout();
        setModalIsOpen(false);
    };

    const handleClickNo = () => {
        timeoutService.logout();
    };

    return (
        <Fragment>
            <div id='idle-timeout-wrapper' onClick={handleEvents} onKeyDown={handleEvents} >
                {children}
            </div>
            <Modal show={modalIsOpen}>
                <Modal.Header ><Modal.Title>Session Timeout Warning</Modal.Title></Modal.Header>
                <Modal.Body>
                    <p>You have been inactive for almost {timeoutService.getMaxMinsInactive()} minutes.</p>
                    <p>Do you wish to remain logged in?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={handleClickYes}>Yes</Button>
                    <Button variant='danger' onClick={handleClickNo}>No</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );

}

export default IdleTimeout;
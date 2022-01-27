import React from 'react';
import { CircleLoading } from 'react-loadingg';
import './Spinner.scss'


const Spinner = () => {
    return (
        <div className={'spinner'}>

            <CircleLoading
                color={'#FFFFFF'}
                size={'large'}
            />
        </div>
    );
};

export default Spinner;
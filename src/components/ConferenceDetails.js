import React from 'react'
import Data from '../data'

class ConferenceDetails extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: Data
        }
    }
    render() {
        const { data } = this.state;
        return (
            <div className='conference-details'>
                <figure>
                    <img src={data[6].src2} alt='' />
                </figure>
            </div>
        )
    }
}

export default ConferenceDetails;
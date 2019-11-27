import React, { Component } from 'react';
import './tourlist.scss';
import Tour from '../Tour/tour';
import Todata from '../../data.js';
export default class TourList extends Component {
    state={tours:Todata};
    hideImage=(id)=>
    {
       const newtour=this.state.tours.filter(item=>item.id!=id);
       this.setState({
           tours:newtour
       });
    }
    render() {
        return (
            <section className='tourlist'> 
            {this.state.tours.map(tour=>{return(<Tour tour={tour} hideimage={this.hideImage}/>)})}

            
            </section>
        )
    }
}

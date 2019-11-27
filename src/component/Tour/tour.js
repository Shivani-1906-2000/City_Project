import React, { Component } from 'react';
import './tour.scss';
import Img1 from '../../images/1.jpg';
export default class Tour extends Component {
    state={showinfo:false}
    handleinfo=()=>{
       this.setState({showinfo:!(this.state.showinfo)})
    }

   

    render() {
        const{id,city,image,name,info}=this.props.tour;
        const {hideimage}=this.props;
        return (
           
            <article className='tour'> 
                <div className='img-container'> 
            <img src={image} alt='image1'/>
                <span className='close-btn' onClick={()=>{hideimage(id)}}> <i class="fa fa-window-close" aria-hidden="true"></i> </span>
                </div>
                <div className='tour-info'> 
                <h3> City: {city} </h3>
                <h4> Name: {name} </h4>
                <h5>  <span onClick={this.handleinfo}> <i className='fa fa-caret-square-o-down'> </i> </span> </h5>
                {this.state.showinfo && <p> {info} </p>}
                 </div>
            </article>
        )
    }
}

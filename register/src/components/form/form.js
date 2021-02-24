import React, { Component } from 'react'
import "./form.css";
import Grid from '@material-ui/core/Grid';
export default class Form extends Component {
  render() {
    return (
      <div className='ff'>
      
      <Grid container spacing = {1}>
      <Grid item xs={6} sm = {6}>
      
          <label className='fn'> First Name </label>
          <br></br>
          <input  type="text"/>
          </Grid>

          <Grid item xs = {2} sm = {2}>
          
          <label className='ln'> Last Name</label>
          <br></br>
          <input  type="text"/>
          
          </Grid>

          <Grid item xs = {6} sm = {6}>
          <label className='pn' > Phone Number </label>
          <br></br>
          <input  type="text"/>
          </Grid>

          <Grid item xs = {2} sm = {2}>
          
          <label className='em'>Email</label>
          <br></br>
          <input  type="text"/>
          
          </Grid>


          <Grid item xs = {6} sm = {6}>
          <label className='ps' > Password </label>
          <br></br>
          <input  type="text"/>
          </Grid>

          <Grid item xs = {2} sm = {2}>
          
          <label className='cps' >Confirm Password</label>
          <br></br>
          <input  type="text"/>

          
          
          </Grid>

          
        
          </Grid>


      </div>
    )
  }
}

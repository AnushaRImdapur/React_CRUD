import React from 'react'
import "./App.css"
export default class Input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            company:'',
            location:'',
            job_title:'',
            no_openings:'',
            salary:'',
            data:[],
            isEdit:false,
        }
    }
   handleChange = (e) =>{
       this.setState({
           [e.target.name]:e.target.value
       })
   } 
   handleClick = () => {
       
       var obj ={
        company:this.state.company,
           location:this.state.location,
           job_title:this.state.job_title,
           no_openings:Number(this.state.no_openings),
           salary:this.state.salary,
          
       }
       console.log('submitting')
       if(this.props.editIndex==='')
            {
                this.props.click(obj)
            }
        else{
            this.props.edit(obj,this.props.editIndex)
        }
       this.reset()
   }

   reset = () => {
       this.setState({
        company:'',
        location:'',
        job_title:'',
        no_openings:0,
        salary:''
        
       })
   }


    render(){
        console.log(this.props)
        return(
            <div>
                company: <br />
                <input name='company'className="input" value={this.state.company} onChange={this.handleChange} placeholder='company'/>
                <br/>
                location: <br />
                 <input name='location' className="input" value={this.state.location} onChange={this.handleChange} placeholder='location'/>
                <br/>
                job_title: <br /> 
                <input name='job_title' className="input" value={this.state.job_title} onChange={this.handleChange} placeholder='job_title'/>
                <br/>
                no_openings: <br />
                <input type="number"className="input"  name='no_openings' value={this.state.no_openings} onChange={this.handleChange} placeholder='no_openings'/>
                <br/>
                salary: <br />
                 <input name='salary'className="input" value={this.state.salary} onChange={this.handleChange} placeholder='salary'/>
                <br/>
                <br/>
               
                {this.props.editIndex===''?
                    (<button onClick={this.handleClick}>Submit</button>):
                    (<button onClick={this.handleClick}> Update</button>)}
                    
                
            </div>

        )
    }
}


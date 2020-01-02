import React from "react";
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }
    
   
    render(){
       
        return(
            <div className='table'>
                {this.job_avaialble}
               <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" >Company</th>
                            <th scope="col">Location</th>
                            <th scope="col">job_title</th>
                            <th scope="col">no_openings</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((item,index)=>{
                           
                            return(
                               
                                <tr>
                                    <td>{item.company}</td>
                                    <td>{item.location}</td>
                                    <td>{item.job_title}</td>
                                    <td >{item.no_openings}</td>
                                    <td>{item.salary}</td>
                                    <td><button onClick={()=>this.props.del(index)}>Link</button></td>
                                    <td><button onClick={()=>this.props.edit(index)}>Link</button></td>
                                </tr>
                               
                            )
                        })}
                </tbody>
            </table>       
                   
            </div>
        )
    }
}
export default Table;

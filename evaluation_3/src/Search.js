import React from "react";
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            company:'',
            location:'',
            display:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    filterItems(e) {
        var arr=this.props.data;
        var query=this.state.company
        
        return arr.filter(function(el) {
            return el["company"].toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        
      }

     componentDidMount(){
       this.filterItems();

     } 
     
    render(){
        var search=this.filterItems()
        console.log(search)
        return(
            <div>
                {this.filterItems}

                <div class="form-group">
                    <h4 >Searching by Company</h4>
                    <input type="text" name="company" value={this.state.company} onChange={this.handleChange} class="form-control form-control-sm" placeholder="Company Name" />
                </div>
                
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
                        </tr>
                    </thead>
                    <tbody>
                        {search.map((item,index)=>{
                           
                            return(
                               
                                <tr>
                                    <td>{item.company}</td>
                                    <td>{item.location}</td>
                                    <td>{item.job_title}</td>
                                    <td >{item.no_openings}</td>
                                    <td>{item.salary}</td>
                                    
                                </tr>
                               
                            )
                        })}
                       
                </tbody>
            </table>       
                   
            </div>
            </div>
        )
    }
}
export default Search;
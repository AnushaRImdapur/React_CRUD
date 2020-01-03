import React from "react";
const Row = ({company, location, job_title, no_openings, salary}) => (
    <tr>
      <td>{company}</td>
      <td>{location}</td>
      <td>{job_title}</td>
      <td>{no_openings}</td>    
      <td>{salary}</td>  
     
    </tr>
  );
class Order extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }
    compareBy(key) {
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      }
    sortBy(item){
        let arrayCopy=[...this.props.data];
        arrayCopy.sort(this.compareBy(item));
        this.setState({data: arrayCopy});
    }
    render(){
        var element=this.props.data.map((rowData,index)=><Row {...rowData} />);
        return(
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col" onClick={() => this.sortBy('Company')} >Company</th>
      <th scope="col" onClick={()=>this.sortBy('location')} >Location</th>
      <th scope="col" onClick={()=>this.sortBy('job_title')}>Job_title</th>
      <th scope="col" onClick={()=>this.sortBy('no_openings')}>No. of Openings</th>
      <th scope="col" onClick={()=>this.sortBy('salary')}>Salary</th>
    </tr>
  </thead>
  <tbody>
   
      {element}
     
    
  </tbody>
</table>
        )
    }
}
export default Order;
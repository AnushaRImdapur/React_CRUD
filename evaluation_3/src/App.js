import React from 'react'

import Input from './Input'
import Table from './Table'
import Order from "./Order";
import Search from "./Search"
var counter=0;
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[
              {
                id:1,
                company:"Google",
                location:"Bangalore",
                job_title:"Full Stack Developer",
                no_openings:3,
                salary:2345556
            },
            {
              id:2,
              company:"Facebook",
              location:"Bangalore",
              job_title:"Designer",
              no_openings:1,
              salary:1250000
          },
          {
            id:3,
            company:"Twitter",
            location:"Pune",
            job_title:"Data Scientist",
            no_openings:3,
            salary:500000
        }
            ],
            editIndex:'',
            count:''
        }
    }
    handleData = (add) =>{
        this.setState({
            data:[...this.state.data, add]
        })
    }

    handleDelete = (index)=>{
        this.setState({
            data:this.state.data.filter((a,i)=>i!=index)
        })
    }

    handleEdit = (index) =>{
        this.setState({
            editIndex:index
        })
    }

    submitEdit = (data,index) => {
        var temp = this.state.data.map((a,i)=>{
            if(i===index)
            a=data
            return a
        })
        console.log('temp is',temp)
        this.setState({
            data:temp,
            editIndex:''
        })
    }
    count=()=>{
      var counting=this.state.data.reduce(function(tot, arr) { 
      return parseInt(tot) + arr.no_openings;
      
      // set initial value as 0
    },0);
    counter=Number(counting);
    console.log("dd",counter)
    }
    componentDidMount(){
      this.count()
    }
    render(){
      console.log(this.count())
        return(
            <div className="container">

                <h4>Number of Jobs Are Avaialble :{counter}</h4>
                <br />
                <h4>Adding company Details</h4>
                <Input edit={this.submitEdit} editIndex={this.state.editIndex} click={this.handleData}/>
                <br />
                <hr />
                <h4>Displaying Data and Adding New Data to the Existing Database</h4>
                <Table 
                    edit={this.handleEdit}
                    del={this.handleDelete} 
                    data={this.state.data}/>
                    <br />
                    <h4>Sorting with Company and Location</h4>
                    <br/>
                    <hr />
                    <Order data={this.state.data} />
                    <hr />
                    <Search data={this.state.data} />
            </div>
        )
    }

}

export default App

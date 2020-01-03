import React from "react";
import Axios from "axios";
class Pagination3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allData:[],
            currentPage:10,
            per_page:5
        }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            this.setState({
                allData:res.data
            })
        })
    }
    pagination=(data,currentPage,per_page)=>{
        
    }
    render(){
        var totalData=this.pagination(this.state.allData, this.state.currentPage, this.state.per_page)
        return(
            <div>
                hi
            </div>
        )
    }
}
export default Pagination3;
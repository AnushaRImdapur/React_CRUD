import React from "react";
class Pagination2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allData:[
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
          },
          {
            id:4,
            company:"Google",
            location:"Bangalore",
            job_title:"Full Stack Developer",
            no_openings:3,
            salary:2345556
        },
          {
              id:5,
              company:"Facebook",
              location:"Bangalore",
              job_title:"Designer",
              no_openings:1,
              salary:1250000
          },
        {
            id:6,
            company:"Twitter",
            location:"Pune",
            job_title:"Data Scientist",
            no_openings:3,
            salary:500000
        }
              ],
              currentpage: 10,
              per_Page: 5
        }
    }
    pagination = (data, currentpage, per_page) => {
        let startPage = (currentpage - 1) * Number(per_page);
        console.log("startPage",startPage)
        let endPage = startPage + Number(per_page)
        let sliceData = data.slice(startPage, endPage);
        let total_pages = Math.ceil(data.length / per_page);
        return {
            'data': sliceData,
            'per_page': per_page,
            "total_pages": total_pages
        }

    }
    handleClick = (a) => {
        this.setState({
            currentpage: a
        })
    }
    handlChange = (event)=>{
        this.setState({
            per_Page:event.target.value
        })
    }
    render(){
        var totalData = this.pagination(this.state.allData, this.state.currentpage, this.state.per_Page)
        console.log(this.state.per_Page,"rr")
        var total_pages = totalData.total_pages;
        var showData = totalData.data;
        var pageNumbers = []
        for (var i = 1; i <= total_pages; i++) {
            pageNumbers.push(i);
        }
        var buttons = pageNumbers.map(num => {
            return (<button onClick={() => this.handleClick(num)}>{num}</button>)

        })
        var displayData = showData.map(num => {
            return (<tr>
                <td>{num.id}</td>
                <td>{num.company}</td>
                <td>{num.location}</td>
                <td>{num.job_title}</td>
                <td>{num.no_openings}</td>
                <td>{num.salary}</td>
            </tr>)
        })
        console.log(totalData)
        return (
            <div>
                <table>
                    <tr>
                        
                        <td>Company</td>
                        <td>Location</td>
                        <td>job_title</td>
                        <td>no_openings</td>
                        <td>salary</td>
                    </tr>
                    <tr>
                        {displayData}
                    </tr>
                </table>
                {buttons}
                <select onClick={(num)=>this.handlChange(num)}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                   

                </select>
            </div>
        )
    }
}
export default Pagination2
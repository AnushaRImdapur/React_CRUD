import React from "react";
class Pagination2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
                data:this.props.data,
                curr: 10,
                perPage: 5
        }
    }
    pagination = (data, cur, perPage) => {
        var first = (cur - 1) * Number(perPage);
        console.log("first",first)
        var last = first + Number(perPage)
        var Data = data.slice(first, last);
        var total = Math.ceil(data.length / perPage);
        return {
            'data': Data,
            'perPage': perPage,
            "total": total
        }

    }
    pagesClick = (a) => {
        
        this.setState({
            curr: a
        })
    }
    selectPage = (event)=>{
        this.setState({
            perPage:event.target.value
        })
    }
    render(){
        var totalData = this.pagination(this.props.data, this.state.curr, this.state.perPage)
        var total = totalData.total;
        var show = totalData.data;
        var pageNum = []
        for (var i = 1; i <= total; i++) {
            pageNum.push(i);
        }
        var buttons = pageNum.map(item => {
            return (
                <button onClick={() => this.pagesClick(item)}>{item}</button>
            )
        })
        var display = show.map(item => {
            return (
                <tr>
                <td>{item.company}</td>
                <td>{item.location}</td>
                <td>{item.job_title}</td>
                <td>{item.no_openings}</td>
                <td>{item.salary}</td>
              </tr>)
        })
        console.log(totalData)
        return (
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Location</th>
                            <th scope="col">Job_title</th>
                            <th scope="col">No. of openings</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {display}
                    </tbody>
                </table>
                <div>
                    {buttons}
                </div>
                <select onClick={(num)=>this.selectPage(num)}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        )
    }
}
export default Pagination2;

import React, { Component } from 'react'
import axios from "axios"

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [],
            currentpage: 10,
            per_Page: 5

        }
    }
    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({
                    allData: res.data
                })
            })
            console.log("dd",this.state.allData)
    }
    pagination = (data, currentpage, per_page) => {
        let startPage = (currentpage - 1) * Number(per_page);
        console.log("start",startPage)
        let endPage = startPage + Number(per_page)
        let sliceData = data.slice(startPage, endPage);
        console.log("sliceData",sliceData)
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
    render() {
        var totalData = this.pagination(this.state.allData, this.state.currentpage, this.state.per_Page)
        console.log("total",totalData)
        var total_pages = totalData.total_pages;
        console.log("pages",total_pages)
        var showData = totalData.data;
        console.log(showData)
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
                <td>{num.title}</td>
                <td>{num.body}</td>
            </tr>)
        })
        console.log(totalData)
        return (
            <div>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Body</td>
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
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>

                </select>
            </div>
        )
    }
}


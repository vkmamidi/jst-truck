import React from 'react';

export default class Search extends React.Component{
    
    state={
        text:''
    }
    onSearchChange = (e)=>{
        const text = e.target.value
        this.setState(()=>({text}))
    }
    
    onSearch = (e)=>{
        e.preventDefault()
        this.props.onSearchChange(e.target.search.value)
    }

    render(){
        return(
            <form onSubmit={this.onSearch}>
            <input type='text' name='search' value={this.state.text} onChange={this.onSearchChange}/>
            <button>Search</button>
            </form>
        )
    }
}
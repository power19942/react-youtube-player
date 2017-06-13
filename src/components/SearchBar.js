import React from 'react';
class SearchBar extends React.Component{
    constructor(props){
        super(props);

    }
    onInputChangeTerm(term){
        this.setState({term});
        this.props.onSearchTermChange(term)
    }
    render(){
        return(
            <div className="search-bar">
                <input onChange={e=>this.onInputChangeTerm(e.target.value)} />
            </div>
        )
    }
};

export {SearchBar};

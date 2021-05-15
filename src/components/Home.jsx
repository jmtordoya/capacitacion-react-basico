import React from 'react'
import ListaPropiedades from './ListaPropiedades'
import Header from './Header'
import '../styles/home.css'
import {useState} from 'react';

const Home = (props) => {
    const [searchTerm,setSearchTerm] = useState('');
    return (
        <div className="container-home">
            <Header placeholder="Search for title"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
            />

            <div className="container-title">
                <span className="title-header">{props.title}</span>
                <span className="count">{`${props.data.length}+ stays`}</span>
            </div>
            
            <ListaPropiedades data={props.data} term={searchTerm} />
        </div>
    )
}

export default Home

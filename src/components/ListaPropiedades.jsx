import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'

const ListaPropiedades = props => {
    return (
        <div className="lista-propiedades">
            {
                props.data.filter((element) => {
                    if(props.term == ""){
                        return element;
                    }else if(element.title.includes(props.term)){
                        return element;
                    }
                }).map((element,key) => {
                    return(
                        <Propiedad data={element} key={key} />
                    )
                })
            }

            
        </div>
    )
}


export default ListaPropiedades

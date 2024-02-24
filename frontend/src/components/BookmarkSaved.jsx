import React from 'react';
import { useSelector } from 'react-redux';
import CardComponent from './CardComponent';

function BookmarkSaved(){
    const bookmark  = useSelector( state => state.bookmark ) ;

    return (
         <>
        {
            bookmark?.map( (item) => {
                return <BookMarkedCard />
            } )
        }
       </>
    )
}


export default BookmarkSaved;
//import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import API from '../API';
import { useParams } from 'react-router-dom';
import { generateKey } from '../../functionshelper';

function ListingTag(props) {

    const [tags, setTags] = useState([])

    const { id } = useParams()

    useEffect(() => {
        API.get('/freelances/' + id)
            .then(response => response.data)
            .then(data => {
                setTags(data.tags);
            })
    }, [id]);
    return (
        <div className='listingTags'>
            <h2>Liste des Tags</h2>

            <div className='mainTags'>
                <ul>
                    {props.tags.map(tag => {
                        return (<li key={generateKey(tag.id)}>{tag.name}</li>);
                    })}
                </ul>

            </div>
        </div>
    );
}
export default ListingTag;

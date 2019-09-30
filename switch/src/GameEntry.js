import React, {useState} from 'react';
import {getMetacritic} from './regions';

export default function GameEntry({entry}) {
    const [metascore, setMetascore] = useState();
    const [url, setUrl] = useState();
    if (!metascore) {
        getMetacritic(entry.title).then(({score, url}) => {
            setMetascore(score);
            setUrl(url);
        });
    }
    return (<tr>  
        <td>{entry.title}</td>
        <td>{url && (<a href={`https://www.metacritic.com${url}`} target="_blank" rel="noopener noreferrer">{metascore}</a>)}</td>
        <td>{entry.price.toFixed(2)}</td>
        <td>{entry.original.toFixed(2)}</td>
        <td>{Math.round(entry.discount)}%</td>
      </tr>);
}
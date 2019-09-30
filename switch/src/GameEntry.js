import React, {useState} from 'react';
import {getMetacritic} from './regions';

export default function GameEntry({entry}) {
    const [metascore, setMetascore] = useState();
    const [metacriticUrl, setUrl] = useState();
    if (!metascore) {
        getMetacritic(entry.title).then(({score, url}) => {
            setMetascore(score);
            setUrl(url);
        });
    }
    return (<tr>
        
        <td>{entry.url ? (<a href={entry.url} target="_blank" rel="noopener noreferrer">{entry.title}</a>) : entry.title}</td>
        <td>{metacriticUrl && (<a href={`https://www.metacritic.com${metacriticUrl}`} target="_blank" rel="noopener noreferrer">{metascore}</a>)}</td>
        <td>{entry.price.toFixed(2)}</td>
        <td>{entry.original.toFixed(2)}</td>
        <td>{Math.round(entry.discount)}%</td>
      </tr>);
}
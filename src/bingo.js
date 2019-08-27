import React from 'react';
import styled from 'styled-components';

const BingoCard = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-column-gap: 10px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

function Bingo(props) {
    console.log(props);
    const entries = props.args.slice(0, 25);
    entries.splice(12, 1,  "Free space");
    return (
        <Wrapper>
            <BingoCard>
                {entries.map((entry) => (<div>{entry}</div>))}
            </BingoCard>
        </Wrapper>
    );
}

export default Bingo;
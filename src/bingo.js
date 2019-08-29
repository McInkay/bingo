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

const BingoPlaceholder = styled.div`
    width: 100%;
    height: 80%
    display: grid;
    justify-items: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

function Bingo(props) {
    let entries = [];
    if (props.args.length >= 24) {
        entries = props.args.slice(0, 25);
        entries.splice(12, 1,  "Free space");
    }
    return (
        <Wrapper>

            {entries.length > 0 ? (
                <BingoCard>
                    {entries.map((entry) => (<div>{entry}</div>))}
                </BingoCard>
            ) : (
                <BingoPlaceholder><div>You need more stuff  </div></BingoPlaceholder>
            )}
        </Wrapper>
    );
}

export default Bingo;
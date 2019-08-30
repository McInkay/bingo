import React from 'react';
import styled from 'styled-components';

const BingoCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;

    & > div {
        display: grid;
        align-items: center;
        justify-items: center;
        overflow: hidden;
    }
`;

const BingoPlaceholder = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: grid;
`;

const Completed = styled.div`
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='white' stroke-width='3'/><path d='M0 0 L100 100 ' stroke='white' stroke-width='3'/></svg>");
    background-repeat:no-repeat;
    background-position:center center;
    background-size: 100% 100%, auto;
`;

function Bingo({args, completed, complete, needMore}) {
    let entries = [];
    if (args.length >= 24) {
        entries = args.slice(0, 25);
        entries.splice(12, 1,  "Free space");
    }
    return (
        <Wrapper>
            {entries.length > 0 ? (
                <BingoCard>
                    {entries.map((entry, index) => completed[index] === true ? (<Completed>{entry}</Completed>) : (<div onClick={() => complete(index)}><div>{entry}</div></div>))}
                </BingoCard>
            ) : (
                <BingoPlaceholder>{needMore ? <div>You need more stuff</div> : <div>Press "Generate" to create</div>}</BingoPlaceholder>
            )}
        </Wrapper>
    );
}

export default Bingo;
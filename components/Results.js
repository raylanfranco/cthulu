import React from 'react';
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
    console.log(results)
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:flex flex-wrap justify-center'>
            { results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    );
};

export default Results;
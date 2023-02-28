import React, { useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../App';

const Parent = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT)

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h1>{count}</h1>
                    <div className="card-actions">
                        <button className="btn btn-primary"
                            onClick={() => setCount(count - 1)}>Decrement</button>
                        <button className="btn btn-success"
                            onClick={() => setCount(count + 1)}>Increment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parent;
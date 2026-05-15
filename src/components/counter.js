import React, {useState} from 'react';

function Counter(){

    const[count, setCount] = useState(0);

    const increment =()=>{
        setCount(count + 1);

    }

    const decrement=()=>{
        setCount(count - 1);
    }

    const reset =()=>{
        setCount(0);
    }
    console.log('akash',reset);

    return(
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh', 
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f7f6',
            padding: '20px'
        }}>
            <h1 style={{ color: '#333', marginBottom: '10px' }}>Welcome to conter Application</h1>
            <h1 style={{ fontSize: '4rem', color: '#007bff', margin: '20px 0' }}>{count}</h1>
            
            <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                    onClick={()=>increment()} 
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    increment
                </button>
                
                <button 
                    onClick={()=>decrement()} 
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Decrement
                </button>
                
                <button 
                    onClick={()=>reset()} 
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
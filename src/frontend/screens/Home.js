import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'

export default function Home({demo}) {

    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(inputs.num1 + " " + inputs.num2);

        await (await demo.add(parseInt(inputs.num1),parseInt(inputs.num2))).wait()
        getResult();
    }

    const getResult = async () => {
        const result = await demo.retrieve();
        setResult(result.toString());
        alert(result.toString());
    }

    useEffect(() => {
        getResult();
    }, [])

    return (
        <div className="flex justify-center">
            <h2>Demo Add 2 Numbers</h2>

            <form onSubmit={handleSubmit}>
                <label>Enter your number 1:
                    <input
                        name="num1"
                        type="number"
                        value={inputs.num1 || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter your number 2:
                    <input
                        name="num2"
                        type="number"
                        value={inputs.num2 || ''}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />

                <h2>Result : {result}</h2>
            </form>
        </div>
    )
}

import { useState } from "react";
import { BiMessage } from 'react-icons/bi';
import Switch from '@mui/joy/Switch';
import * as Constants from '../../../utils/constants/Constants';

const CoreSolutions = () => {
    const [selectedRb, setSelectedRb] = useState('All');
    const [checked, setChecked] = useState(false);
    const options = Constants.options;

    const handleChange = (event) => {
        setSelectedRb(event.target.value);
    };

    return (
        <div className="position-fixed">
            <div className="mt-4 mx-1 bg-white p-3 core-sol-div">
                <h6 className="fw-bold mx-2 input-rb-header pe-3">Core Solutions</h6>
                <div className="pe-3">
                    {options.map((option) => (
                        <div className="d-flex flex-row justify-content-start">
                            <label key={option.value} className="my-1 rb-label">
                                <input
                                    className="mx-2 input-rb"
                                    size={1.5}
                                    type="radio"
                                    key={option.value}
                                    value={option.label}
                                    checked={selectedRb === option.value}
                                    onChange={handleChange}
                                />
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex flex-row bg-white mt-2 mx-1 px-3 py-2 core-sol-div">
                <BiMessage size={18} />
                <p className="paragraph mx-2">View Stories</p>
                {/* <Switch
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                /> */}
            </div>
        </div>
    )
}

export default CoreSolutions;
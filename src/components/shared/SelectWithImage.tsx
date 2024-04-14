import React, { useState } from 'react';
import Select, { ActionMeta, Options } from 'react-select';

export interface CustomOption {
    value: string,
    imageLink: string,
    label: string
}

interface Props{
    options : CustomOption[]
}

const options: CustomOption[] = [
  { value: '1', label: 'Option 1', imageLink: 'path_to_image_1' },
  { value: '2', label: 'Option 2', imageLink: 'path_to_image_2' },
  { value: '3', label: 'Option 3', imageLink: 'path_to_image_3' },
];

function SelectWithImage(props : Props) {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const onChange = (option: CustomOption | null, actionMeta: ActionMeta<CustomOption>) => {
        setSelectedOption(selectedOption);
     }

    return (<div className="App">
            <Select
            defaultValue={selectedOption}
            onChange={onChange}
            options={options}
            />
            </div>);
}

export default SelectWithImage;
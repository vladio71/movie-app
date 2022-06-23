import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useEffect, useState} from "react";
import {styled} from '@mui/system';
import {yellow} from "@mui/material/colors";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5,
            width: 250,
            background: 'black',
            color:"white",

        },

    },
};
const Caption = styled("div")({
    position:'relative',
    marginTop:"-1.4rem",
    top: 0,
    color: 'yellow'

})


const CustomSelect = (props) => {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([])
 
    const handleChange = (event) => {
        setItem(event.target.value);
        if ('handle' in props) {
            props.handle(props.objName,event.target.value )
        }
      };

    useEffect(()=>{
        setItems(props.items)
    },[props])


     return (
        <span style={{margin: '0 .5rem'}}>
            <Caption>
                {props.name}
            </Caption>
                     <Select
                        value={item}
                        onChange={handleChange}
                        displayEmpty
                        MenuProps={MenuProps}
                        color={'secondary'}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                           {items.map(i=>{
                            return <MenuItem value={i}>{i}</MenuItem>
                         })}

                    </Select>

        </span>
    )
}

export default CustomSelect
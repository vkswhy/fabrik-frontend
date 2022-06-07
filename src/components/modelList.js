import { useState, useRef, useEffect } from "react"
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from "axios";
import { BASICURL, BACKENDURL,PRESETS } from "./constants"
import defaultModel from "./Poimandres.gltf"

const ModelList = props => {
    const [allModels, setAllModels] = useState([{ name: "fabrik.glb", id: 1 }])
    const [isopen, setIsopen] = useState(false)
    useEffect(() => {
        axios.get(BASICURL).then(res => {
            setAllModels(res.data)
            console.log(allModels)
        }).catch(() => alert("some error occured"));
    }, [props.navExpand])
    const handleModel = (event) => {
        const id = Number(event.target.id)
        props.setNavExpand(false)
        props.changeModel(allModels[id].url)
    }

    const handlePreset = e => {
        const id = Number(e.target.id)
        props.changePreset(PRESETS[id])
    }

    return (
        <div className= {`allModels ${props.navExpand ? "":"nav-collapsed"}`}>
            <h3 style={{color:"white"}}>All Models</h3>

            {allModels.map((model, ind) => {
                return <Button id={ind} key={ind} onClick={handleModel} color="info">
                    {model.name}
                </Button>
            })}
            <div className="environment">
                <Dropdown direction="up" isOpen={isopen} toggle={() => setIsopen(prevState => !prevState)}>
                    <DropdownToggle caret>
                        Change Environment
                    </DropdownToggle>
                    <DropdownMenu end>
                        {PRESETS.map((el, ind) => <DropdownItem id= {ind} key={ind} onClick={handlePreset}>{el}</DropdownItem>)}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>

    );
};

export default ModelList
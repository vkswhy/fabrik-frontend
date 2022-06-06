import { Navbar,NavbarBrand, NavbarToggler } from "reactstrap"
import {BASICURL} from "./constants"
import { useRef } from "react"
import { Button } from "reactstrap"
import axios from 'axios'
export default function NavBar(props) {
    const handleExpand = () => {
        props.setExpand(prevState =>!prevState)
    }

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        props.setExpand(false)
        const form = new FormData()
        const fileUploaded = event.target.files[0];
        form.append("file", fileUploaded)

        axios.post(BASICURL + "/upload", form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res =>
            {handleExpand()})
        // props.changeModel(fileUploaded);
    };
    return (
        <Navbar color="dark" dark>
            <NavbarToggler onClick = {handleExpand} className="ml-5" />

            <NavbarBrand href="/">
                <img src="/f-wordmark-logo-white.webp" alt="" height="24px"/>
            </NavbarBrand>
            <Button onClick={handleClick} color="primary" style={{ height: "fit-to-content" }}>
                New  +
                <input type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
            </Button>
        </Navbar >
    )
}

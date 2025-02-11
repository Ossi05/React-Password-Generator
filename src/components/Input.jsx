import { styled } from "styled-components";

const Div = styled.div`
    margin: 1rem;
`

export default function Input({ label, onChange, name, id, ...props }) {
    return (<>
        <Div className="password-input-container">
            <label htmlFor={id}>{label}</label>
            <input onChange={onChange} name={name} id={id} {...props} />
        </Div>
    </>);
}
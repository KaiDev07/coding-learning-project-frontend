type PropsType = {
    text: string
    heading: string
}

const SliderElement = ({ text, heading }: PropsType) => {
    return (
        <>
            <h3>{heading}</h3>
            <p>{text}</p>
        </>
    )
}

export default SliderElement

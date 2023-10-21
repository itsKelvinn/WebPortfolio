const PrimaryButton = ({text}) => {
    return(
        <div className="cursor-pointer bg-primary rounded-md px-2 py-1">
            {text}
        </div>
    )
}

const SecondaryButton = ({text}) => {
    return(
        <div className="cursor-pointer bg-secondary rounded-md px-2 py-1">
            {text}
        </div>
    )
}

const BlueButton = ({text}) => {
    return(
        <div className="cursor-pointer bg-blue-600 rounded-md px-3 py-2 font-bold">
            {text}
        </div>
    )
}

export {PrimaryButton , SecondaryButton , BlueButton};
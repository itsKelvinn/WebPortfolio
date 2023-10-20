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

export {PrimaryButton , SecondaryButton};
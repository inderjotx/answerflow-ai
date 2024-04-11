import React from 'react'

type Props = {
    starLocation: StarLocation,

}

export enum StarLocation {
    Start,
    Middle,
    End
}

export const Card: React.FC<Props> = ({ starLocation }) => {
    return (
        <div>Card</div>
    )
}
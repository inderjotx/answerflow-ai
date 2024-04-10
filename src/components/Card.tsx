import React from 'react'

type Props = {
    starLocation: StarLocation,

}

enum StarLocation {
    Start,
    Middle,
    End
}

export const Card: React.FC<Props> = ({ starLocation }) => {
    return (
        <div>Card</div>
    )
}
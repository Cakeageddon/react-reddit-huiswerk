import React from "react";

function Truncatenator({ str }) {
    return (
        str.length <= 100 ? str : str.slice(0, 100) + "..."
    )
}

export default Truncatenator
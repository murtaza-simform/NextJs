"use client";

import { clientfunction } from "../utils/clientFunction";
import { useTheme } from "../utils/themeProvider";

// import { serverfunction } from "../utils/serverFunction"; //server only

export default function ClientRoutePage() {

    // const result = serverfunction();
    const result = clientfunction();

    const theme = useTheme();

    console.log("Rendering from client...")
    return (
        <>
        <div style={{color: theme?.color?.primary}}>Client Route Page</div>
        <h4 style={{color: theme.color.secondary}}>Hooray! its working fine!!!!</h4>
        <h5>{result}</h5>
        </>
        
    );
}
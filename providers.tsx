import * as React from "react";

// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/react";

export default function Providers({children,}: Readonly<{ 
    children: React.ReactNode;
 }>) { 
    return(
        <HeroUIProvider>
            {children}
        </HeroUIProvider>

    )
}
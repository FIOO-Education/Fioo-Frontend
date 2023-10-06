"use client";

import { useChildStore } from "@/stores/use-child";

const Page = () => {
    const { currentClass } = useChildStore(state => state);

    return ( 
        <div>{currentClass?.title} | {currentClass?.nameClass}</div>
     );
}
 
export default Page;
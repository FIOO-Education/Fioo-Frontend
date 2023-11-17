"use client";

import LoadingGif from "@/components/LoadingGif/LoadingGif";
import { useRouter } from "next/navigation";

function Home() {
    const router = useRouter();

    router.push("/home");

    return <LoadingGif center />;
}

export default Home;
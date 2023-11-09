import Loading from "@/public/images/loading.gif";

interface Props { 
    center?: boolean;
}

export default function LoadingGif({ center }: Props) {
    return (
        <div style={{
            width: "100%", 
            textAlign: "center",
            position: center ? "fixed" : "static",
            top: "50%", left: "50%",
            transform: center ? "translate(-50%, -50%)" : "none"
        }}>
            <img width={150} height={150} src={Loading.src} alt="" />
        </div>
    )
}
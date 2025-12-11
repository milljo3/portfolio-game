import { Parallax } from "react-scroll-parallax";

export default function ParallaxBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            <Parallax
                speed={0}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2000%',
                    minHeight: '500vh'
                }}
            >
                <div
                    className="w-full h-full bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url('/nebula.jpg')`,
                        backgroundAttachment: 'fixed',
                        filter: 'hue-rotate(90deg) saturate(0.8)'
                    }}
                />
            </Parallax>
            <Parallax
                speed={-7}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2000%',
                    minHeight: '500vh'
                }}
            >
                <div
                    className="w-full h-full bg-repeat opacity-30"
                    style={{ backgroundImage: "url('/stars-small.png')" }}
                />
            </Parallax>
            <Parallax
                speed={-3}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2000%',
                    minHeight: '500vh'
                }}
            >
                <div
                    className="w-full h-full bg-repeat opacity-40"
                    style={{ backgroundImage: "url('/stars-large.png')" }}
                />
            </Parallax>
            
            <div className="absolute inset-0 h-[2000%] min-h-[500vh] bg-gradient-to-b from-[#0a1a0f] via-[#1a3d2f] to-black opacity-70" />
        </div>
    );
}
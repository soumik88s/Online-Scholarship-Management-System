import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../assets/Animation - 1733452239295.json";

const Animation = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <div className=" flex justify-center items-center my-10 [calc(100vh-390px)]">
            <div className=" h-[500px] w-[500px]">
                {View}
            </div>
        </div>
    )
}

export default Animation;
import loadingAnimation from "lotties/loading.json";
import React from "react";
import Lottie from "react-lottie";

export const Loading = ({ loading = true }: { loading?: boolean }) => {
  return loading ? (
    <div className="fixed bg-black/25 flex w-10/12 flex-auto flex-col justify-center items-center z-50">
      <div className="fixed">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: loadingAnimation,
            // rendererSettings: {
            //   preserveAspectRatio: "xMidYMid slice",
            // },
          }}
          height={300}
          width={300}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

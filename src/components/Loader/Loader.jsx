import { ThreeDots, Oval } from "react-loader-spinner";
import { Box } from "./Loader.styled";

export const Loader = () => {
  return (
    <Box>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#38D2D2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};

export const CircleLoader = () => {
  return (
    <Oval
      height={40}
      width={40}
      color="#EBD8FF"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#EBD8FF"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

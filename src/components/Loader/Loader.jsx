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
      height={30}
      width={30}
      color="#33CC99"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#33CC99"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

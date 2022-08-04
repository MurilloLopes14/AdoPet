//Redux
import { reset } from "../Slices/authSlice";

export const useResetComponentMessage = (dispatch) => {
  return () => {
    setTimeout(() => {
      dispatch(reset());
    }, 2000);
  };
};

import { styled } from '@mui/system';
import mainTheme from '../../theme';

const BottomBar = styled('div')({
  backgroundColor: mainTheme.palette.dusty.main,
  padding: 4,
  mt: 2,
  borderRadius: 20,
  width: 300,
  height: 40,
  display: "flex",
  direction: "row",
  justifyContent: "space-around",
  alignItems: "center",
  position: "absolute",
  bottom: "30px",
  left: "50%",
  zIndex: 50,
  transform: "translateX(-50%)",
});

export default BottomBar;

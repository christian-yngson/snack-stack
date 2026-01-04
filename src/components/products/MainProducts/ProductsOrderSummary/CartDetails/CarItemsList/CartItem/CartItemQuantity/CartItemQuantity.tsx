import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import {
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/features/cart/cartSlice";
import { type Dispatch } from "@reduxjs/toolkit";
import { type RootState } from "@/redux/store";
import Box from "@mui/material/Box";

interface OwnProps {
  id: string | number;
}

interface StateProps {
  quantity: number;
}

interface DispatchProps {
  increaseQuantity: (id: string | number) => void;
  decreaseQuantity: (id: string | number) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

/* @TODO add test immediate */
function CartItemQuantity({
  id,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      justifyContent="flex-start"
      sx={{
        border: (theme) => `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 2,
        padding: 0.5,
      }}
      alignSelf="start"
    >
      <Tooltip title={quantity <= 1 ? "Quantity cannot go below 1" : ""}>
        <Box component="span">
          <IconButton
            size="small"
            onClick={() => decreaseQuantity(id)}
            disabled={quantity <= 1}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
        </Box>
      </Tooltip>
      <Typography variant="body2">{quantity}</Typography>
      <IconButton
        size="small"
        onClick={() => increaseQuantity(id)}
        disabled={quantity >= 10}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
}

/* 
  Hooks are the modern and recommended way to connect to the redux store.
  The implementation below using connect is for demonstrating legacy Redux knowledge.
*/
function mapStateToProps(state: RootState, ownProps: OwnProps): StateProps {
  return {
    quantity:
      state.cart.value.find((item) => item.id === ownProps.id)?.quantity ?? 0,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    increaseQuantity: (id: string | number) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id: string | number) => dispatch(decreaseQuantity(id)),
  };
}

const ConnectedCartItemQuantity = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(CartItemQuantity);

export default ConnectedCartItemQuantity;

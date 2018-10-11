import { connect } from "react-redux"

import * as actionCreators from "../actions/index.js";
import { DisplayItems } from "../components/DisplayItems.js";


const mapPropsToState = state => state;

export const Container = connect(mapPropsToState, actionCreators)(DisplayItems);

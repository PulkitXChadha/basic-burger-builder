import React, { Component } from "react";
import Aux from "../../../hoc/Auxilary/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //This could be a functional compoents, doesn't have to be a class componement
  componentWillUpdate() {
    console.log("OrderSummary will update");
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      igKey => (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
          {this.props.ingredients[igKey]}
        </li>
      )
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burder with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Prince:</strong>
          {this.props.price.toFixed(2)}
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;

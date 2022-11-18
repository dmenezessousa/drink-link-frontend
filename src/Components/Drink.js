import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "../Styles/Cardstyle.scss";
// import { Link } from "react-router-dom";

class Drink extends React.Component {
  render() {
    let title = this.props.selectedDrink.strDrink;
    let id = this.props.selectedDrink.idDrink;
    let image = this.props.selectedDrink.strDrinkThumb;

    return (
      <>
        <Container className="drinkToMake">
          <Card style={{ width: "18rem" }} className="mx-3 my-3">
            <Card.Header as="h1">
              {this.props.selectedDrink.strDrink}
            </Card.Header>
            <Card.Body>
              <Card.Img src={this.props.selectedDrink.strDrinkThumb} />
            </Card.Body>

            {this.props.selectedDrink.strIBA && (
              <Card.Footer>{this.props.selectedDrink.strIBA}</Card.Footer>
            )}
          </Card>
        </Container>

        <Container className="cardDisplay">
          {this.props.selectedDrink.strIngredient1 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient1}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient1}-Medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure1}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient2 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient2}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient2}-Medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure2}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient3 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient3}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient3}-medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure3}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient4 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient4}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient4}-medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure4}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient5 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient5}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient5}-medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure5}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient6 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient6}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient6}-medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure6}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient7 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient7}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient7}-medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure7}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient8 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient8}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient8}-medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure8}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient9 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient9}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient9}-medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure9}
              </Card.Footer>
            </Card>
          )}

          {this.props.selectedDrink.strIngredient10 && (
            <Card
              style={{ width: "13rem", height: "20rem" }}
              className="mx-3 my-3"
            >
              <Card.Header as="h3">
                {this.props.selectedDrink.strIngredient10}
              </Card.Header>
              <Card.Img
                src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient10}-medium.png`}
              />
              <Card.Footer as="h4">
                {this.props.selectedDrink.strMeasure10}
              </Card.Footer>
            </Card>
          )}
        </Container>

        <div className="drinkinstructions">
          <h2>Instructions</h2>
          <p>{this.props.selectedDrink.strInstructions} </p>
          <h4>Glass type</h4>
          <p>{this.props.selectedDrink.strGlass}</p>

          <Button
            onClick={() =>
              this.props.addCocktailToFavorite({
                title: title,
                id: id,
                image: image,
              })
            }
            variant="secondary"
            type="submit"
            className="favorite"
          >
            add to Favorites
          </Button>
        </div>
      </>
    );
  }
}

export default Drink;

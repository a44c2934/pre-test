import Card from "@/components/Card/Card";
import Box from "@/components/Layout/Box";
import Container from "@/components/Layout/Container";
import Content from "@/components/Layout/Content";
import Section from "@/components/Layout/Section";
import { FruitVegetable, IFruitVegetableItem } from "@/utils/data";
import { useState } from "react";

interface IData {
  default: IFruitVegetableItem[],
  fruit: IFruitVegetableItem[],
  vegetable: IFruitVegetableItem[],
}

function Home() {
  const [data, setData] = useState<IData>({
    default: [{
      type: "Fruit",
      name: "Apple",
    }, {
      type: "Vegetable",
      name: "Broccoli",
    }],
    fruit: [],
    vegetable: [],
  });

  const onClickFruitVegetable = (item: IFruitVegetableItem) => {
    setData((prevData) => {
      const isFruit = item.type === "Fruit";
      return {
        ...prevData,
        default: prevData.default.filter((i) => i !== item),
        fruit: isFruit ? [...prevData.fruit, item] : prevData.fruit,
        vegetable: !isFruit ? [...prevData.vegetable, item] : prevData.vegetable,
      };
    });
  }

  const onClickFruit = () => {

  }
  const onClickVegetable = () => {

  }
  console.log("data", data)
  return (
    <Container>
      <Section>
        <Content>
          <Box>
            {data.default.map((item) => (
              <Card
                key={item.name}
                options={item}
                onClick={(options) => onClickFruitVegetable({ ...options })}
              />
            ))}
          </Box>
          <Box title="Fruit">
            {data?.fruit.map((item, index) => (
              <Card key={index} options={item} onClick={onClickFruit} />
            ))}
          </Box>
          <Box title="Vegetable">
            {data?.vegetable.map((item, index) => (
              <Card key={index} options={item} onClick={onClickVegetable} />
            ))}
          </Box>
        </Content>
      </Section>
    </Container>
  );
}
export default Home;
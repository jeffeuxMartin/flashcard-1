import Header from "../components/Header";
import Content from "../components/Content";
import Card from "../components/Card";
import Button from "../components/Button";
import {useState} from "react";

if (0) console.log(Content);
const vocabularies = [
  {
    word: "knotty",
    part_of_speech: "Adjective",
    definition:
      "(of a problem or difficulty) complicated and difficult to solve.",
    example: "It was a very knotty problem.",
  },
  {
    word: "cantrip",
    part_of_speech: "Noun",
    definition: "a magic spell; trick by sorcery.",
    example:
      "And that old witch, Eliza—I little guessed she’d play this cantrip on me: But what a jest—Jerusalem, what a jest!",
  },
  {
    word: "traverse",
    part_of_speech: "Verb",
    definition: "to pass or move over, along, or through.",
    example: "Stanley traversed the continent from west to east.",
  },
  {
    word: "peculiar",
    part_of_speech: "Adjective",
    definition: "different to what is normal or expected; strange.",
    example: "He gave her some very peculiar looks.",
  },
];

function FlashCard() {

  const [openExample, setOpenExample] = useState ([]);

  const handleStarClick = (event) => { };
  if (0) console.log(handleStarClick);

  const handleExampleClick = (index, example) => {
    let current = [...openExample];
    current[index] = example;
    setOpenExample(current);
  };
  


  return (
    <div>
      <Header title={"My Flash Card."} />
      {vocabularies.map((v, index) => { 
   
          
        return (
        <div className="card" key={index}>
          <Card word={v.word}
            part_of_speech={v.part_of_speech}
            definition={v.definition}
          />
          <Button className="example-button" text="Example" onClick={
            event => handleExampleClick(index, v.example)
           }
          />
          <span>{openExample[index]}</span>

        </div>
        ); })

      }
    </div>
  );
}



export default FlashCard;

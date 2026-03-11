import "../post/Post.css";

// props - общепринятое название для параметров
// props - это объект
export default function Post({ title, description }) {
  return (
    <>
      <div className="post">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/* <Button onClick={() => click('One')}>
        <p>One</p>
      </Button>
      <Button onClick={() => click('Two')}>
        <p>Two</p>
      </Button>
      <Button onClick={() => click('Three')}>
        <p>Three</p>
      </Button> */}
    </>
  );
}

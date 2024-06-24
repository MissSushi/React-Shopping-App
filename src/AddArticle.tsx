import Button from "./components/Button";
import GroceryInputMask from "./components/GroceryInputMask";
import LinkButton from "./components/LinkButton";

type Article = {
  amount: string;
  article: string;
  id: string;
};

const AddArticle = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target as HTMLFormElement);
          const amount = formData.get("amount");
          const article = formData.get("article");

          const rawArticles = localStorage.getItem("Articles");
          const entry = { amount, article, id: crypto.randomUUID() } as Article;

          if (rawArticles) {
            const storedArticles = JSON.parse(rawArticles);
            storedArticles.push(entry);
            localStorage.setItem("Articles", JSON.stringify(storedArticles));
          } else {
            localStorage.setItem("Articles", JSON.stringify([entry]));
          }
          (e.target as HTMLFormElement).reset();
          window.location.href = "/";
        }}
      >
        <GroceryInputMask></GroceryInputMask>
        <div className="mt-16 flex justify-center">
          <Button></Button>
        </div>
        <LinkButton
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Abbrechen
        </LinkButton>
      </form>
    </>
  );
};

export default AddArticle;
export { type Article };

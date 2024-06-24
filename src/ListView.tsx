import { useEffect, useState } from "react";
import LinkButton from "./components/LinkButton";
import { Article } from "./AddArticle";
import TableRow from "./components/TableRow";

const ListView = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const articlesList = getStoredAsList();
    setArticles(articlesList);
  }, []);

  return (
    <>
      <table className="w-full table-auto border-separate border-spacing-2 rounded-lg border border-slate-600 bg-slate-200 text-white">
        <thead>
          <tr>
            <th className="rounded border border-slate-600 bg-slate-400 p-4">
              Menge
            </th>
            <th className="rounded border border-slate-600 bg-slate-400 p-4">
              Artikel
            </th>
            <th className="rounded border border-slate-600 bg-slate-400 p-4">
              Aktion
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            return (
              <TableRow
                article={article}
                key={article.id}
                onDelete={(articleToDelete) => {
                  const articlesList = getStoredAsList();

                  const filtered = articlesList.filter(
                    (item) => item.id !== articleToDelete.id,
                  );

                  setArticles(filtered);
                  localStorage.setItem("Articles", JSON.stringify(filtered));
                }}
                onSave={(newData) => {
                  const articlesList = getStoredAsList();

                  const index = articlesList.findIndex(
                    (item) => item.id === newData.id,
                  );
                  if (index !== -1) {
                    articlesList[index] = newData;
                    setArticles(articlesList);
                    localStorage.setItem(
                      "Articles",
                      JSON.stringify(articlesList),
                    );
                  } else {
                    window.alert("Artikel existiert nicht.");
                  }
                }}
              />
            );
          })}
        </tbody>
      </table>
      <LinkButton href="/add_article">Hinzufügen</LinkButton>
    </>
  );
};

function getStoredAsList() {
  const storedArticles = localStorage.getItem("Articles");

  if (storedArticles) {
    return JSON.parse(storedArticles) as Article[];
  }
  return [];
}

export default ListView;

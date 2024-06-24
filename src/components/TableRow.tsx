import { useRef, useState } from "react";
import TableData from "./TableData";
import LinkButton from "./LinkButton";
import { Article } from "../AddArticle";

type TableRowProps = {
  article: Article;
  onDelete: (articleToDelete: Article) => void;
  onSave: (newData: Article) => void;
};

const TableRow = ({ article, onDelete, onSave }: TableRowProps) => {
  const [editMode, setEditMode] = useState(false);
  const amountRef = useRef<HTMLInputElement>(null);
  const articleRef = useRef<HTMLInputElement>(null);

  return (
    <tr>
      <TableData>
        {editMode ? (
          <>
            <label htmlFor="editAmount">Menge</label>
            <input
              ref={amountRef}
              name="editAmount"
              id="editAmount"
              className="rounded text-black"
              defaultValue={article.amount}
            ></input>
          </>
        ) : (
          article.amount
        )}
      </TableData>
      <TableData>
        {editMode ? (
          <>
            <label htmlFor="editArticle">Artikel</label>
            <input
              ref={articleRef}
              name="editArticle"
              id="editArticle"
              className="rounded text-black"
              defaultValue={article.article}
            ></input>
          </>
        ) : (
          article.article
        )}{" "}
      </TableData>
      <TableData>
        <LinkButton
          onClick={() => {
            onDelete(article);
          }}
        >
          Löschen
        </LinkButton>
        {editMode && (
          <LinkButton
            onClick={() => {
              const newArticle: Article = {
                ...article,
                amount: amountRef.current!.value,
                article: articleRef.current!.value,
              };

              onSave(newArticle);
              setEditMode(false);
            }}
          >
            Speichern
          </LinkButton>
        )}
        <LinkButton
          onClick={() => {
            setEditMode((editMode) => !editMode);
          }}
        >
          {editMode ? "Abbrechen" : "Bearbeiten"}
        </LinkButton>
      </TableData>
    </tr>
  );
};

export default TableRow;

import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { api } from "../api";
import { Card } from "../components/Card";

const initialNotepads = [];
const initialLoading = true;

export function HomeRoute() {
  const [notepads, setNotepads] = useState(initialNotepads);
  const [loading, setLoading] = useState(initialLoading);

  async function loadNotepads() {
    const response = await api.get("/notepads");
    const nextNotepads = response.data.notepads;
    setNotepads(nextNotepads);
  }

  useEffect(() => {
    loadNotepads();
  }, []);

  useEffect(() => {
    if (notepads.length > 0) {
      setLoading(false);
    }
  }, [notepads]);

  return (
    <>
      {loading && (
        <div className="flex justify-center">
          <FaSpinner className="text -4xl animate-spin" />
        </div>
      )}
      {notepads.map((notepad) => {
        return (
          <Card>
            <Link
              to={`/ver-notepad/${notepad.id}`}
              key={notepad.id}
              className="border-b py-2 cursor-pointer block"
            >
              <span className="text-sm text-gray-500">
                {new Date(notepad.createdAt).toLocaleDateString()}
              </span>
              <h2 className="text-lg font-bold leading-tight pb-2">
                {notepad.title}
              </h2>
              <p>{notepad.subtitle}</p>
            </Link>
          </Card>
        );
      })}
    </>
  );
}

import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <div className="app text-violet-400">
      <ul>
        {data?.lessons.map((lesson: Lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

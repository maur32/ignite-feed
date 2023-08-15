import {Header} from "./components/Header";
import {Post, PostProps} from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import {Sidebar} from "./components/Sidebar";

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maur32.png",
      name: "Mauricio Martins",
      role: "Front-End Developer @ backlgrs",
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋🏼"},

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {type: "link", content: "👉jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-18 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @ Rocketseat",
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋🏼"},
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {type: "link", content: "👉jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-19 10:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

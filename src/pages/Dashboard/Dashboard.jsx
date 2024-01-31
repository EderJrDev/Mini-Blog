//CSS
import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import styles from "./Dashboard.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div>
            <span>Título</span>
            <span>Ações</span>
          </div>
          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <div>
                <Link to={`/posts/${post.id}`} className="btn btn-outline">
                  Ver
                </Link>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;

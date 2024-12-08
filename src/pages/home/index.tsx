import Layout from "@/components/layout";
import PostCard from "@/components/postCard";
import { useUserAuth } from "@/context/userAuthContext";
import { getPosts } from "@/repository/post.service";
import { DocumentResponse } from "@/types";
import * as React from "react";
import "../../App.css";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const { user } = useUserAuth();
  const [data, setData] = React.useState<DocumentResponse[]>([]);
  const getAllPost = async () => {
    const response: DocumentResponse[] = (await getPosts()) || [];
    console.log("All post are : ", response);
    setData(response);
  };
  React.useEffect(() => {
    if (user != null) {
      getAllPost();
    }
  }, []);

  const renderPosts = () => {
    return data.map((item) => {
      return <PostCard data={item} key={item.id} />;
    });
  };
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="relative mb-6 w-full text-gray-600">
        <div className="cssanimation hu__hu__">
          La mejor comunidad para amantes de los autos, descubra lo último en modificaciones de automóviles, talleres profesionales y excelencia automotriz.
        </div>
          <button type="submit" className="absolute right-2.5 top-6">
          </button>
        </div>

        <div className="mb-5">
          <div className="w-full flex justify-center">
            <div className="flex flex-col max-w-sm rounded-sm overflow-hidden">
              {data ? renderPosts() : <div>...Loading</div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
